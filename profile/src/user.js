class showMenus{
    constructor(x){
        var params = new URLSearchParams(window.location.search);
        this.optValue = params.get('opt');
        this.dashboardMenu = document.querySelector('#dashboardMenu');
        this.dashboardDiv = document.querySelector('#dashboardDiv');
        this.croppie = null;
        this.whoIs = null;
        if (typeof adminLogged !== 'undefined') {
          if (adminLogged) {
            this.whoIs = 'admin';
          }
        }else if(typeof userLogged !== 'undefined'){
          if (userLogged) {
            this.whoIs = 'user';
          }
        }
        // check the hash and display what to show
        if (this.optValue == '' || this.optValue === null || this.optValue === 'undefined') {
            // Stay on dashboard
            this.dashboardMenu.classList.add('active');
            this.dashboardDiv.style.display = 'block';
            this.dashboardMenu.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }else{
            var showDiv = document.getElementById(`${this.optValue}Div`);
            var showMenu = document.getElementById(`${this.optValue}Menu`);
            showMenu.classList.add('active');
            showDiv.style.display = 'block';
            showMenu.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    reload(){
        window.location.href =  window.location.href;
    }

    uploadDp(){
      document.getElementById('uploadDP').style.display = 'flex';
      disbaleScroll();
    }
    cancelDpUpload(){
      document.getElementById('uploadDP').style.display = 'none';
      enableScroll();
      
    }

    // For dp upload only
    uploadImage() {
      document.querySelector('#uploadDbButton').innerHTML = `Upload`;
      var removeImageButton = document.querySelector('#removeImage');
      var uploadDbButton = document.querySelector('#uploadDbButton');
      document.querySelector('.uploadDpDiv .uploadDpContainer #message').style.display = 'block';
      
      removeImageButton.style.display = 'block';
      removeImageButton.addEventListener('click', () => {
        this.removeImage();
      });

      uploadDbButton.style.display = 'block';
      document.getElementById('uploadFileLabel').style.display = 'none';
      var aspectRatio = 1; // Specify your desired aspect ratio here
      var boundaryWidth = 230; // Width of the boundary
      var boundaryHeight = boundaryWidth / aspectRatio; // Calculate height based on the aspect ratio
  
      this.croppie = new Croppie(document.getElementById('croppieContainer'), {
        viewport: { width: '100%', height: '100%', type: 'free' },
        boundary: { width: boundaryWidth, height: boundaryHeight },
        enableOrientation: true
      });
  
      var fileInput = document.getElementById('uploadInputFile');
      var file = fileInput.files[0];
      var reader = new FileReader();
  
      reader.onload = (e) => {
        var image = new Image();
        image.src = e.target.result;
  
        image.onload = () => {
          this.croppie.bind({
            url: image.src,
            orientation: 1
          });
        };
      };
      reader.readAsDataURL(file);
      uploadDbButton.addEventListener('click', () => {
        this.croppie.result({ format: 'base64', size: 'original' }).then((base64Image) => {
          var binaryImage = this.dataURItoBlob(base64Image);
          this.uploadImageToServer(binaryImage, 'dpUpload'); // Pass the base64Image to uploadToServer()
        });
      });
    }

    //*******Photo/Video Upload************/
    uploadMedia() {
      var fileInput = document.getElementById("uploadInputImage");
      var uploadMessage = document.getElementById('uploadMessage');

      if (fileInput.files && fileInput.files[0]) {
       
        if (fileInput.files[0].type.startsWith('image/')) {
          this.uploadImages(fileInput);
        }else if(fileInput.files[0].type.startsWith('video/')){
          this.uploadVideo(fileInput);
        }else{
          uploadBox.style.display = 'flex';
          uploadMessage.innerHTML = 'Video or Image';
          uploadMessage.style.color = 'red';
        }
        
      }
    }

    //*******Image Upload************/ 
    uploadImages(fileInput){
      var self = this;
      var binaryImage;
      var imagePreview = document.getElementById("tempImage");
      var uploadBox = document.getElementById('uploadBox');
      imagePreview.innerHTML = '';
      var tempBox = document.getElementById('tempUploadBox');
      uploadBox.style.display = 'none';
      tempBox.style.display = 'flex';
      var reader = new FileReader();
      reader.onload = function (e) {
        var imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = "100%";
        imgElement.style.maxHeight = "100%";
        imagePreview.appendChild(imgElement);
        binaryImage = e.target.result;
        var blobImage = self.dataURItoBlob(binaryImage)
        console.log(blobImage);
        self.uploadImageToServer(blobImage, 'image');
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
    uploadImageToServer(binaryFile, utype) {
        var formData = new FormData();
        // Determine the file extension based on the MIME type
        var mimeString = binaryFile.type;
        var fileExtension = mimeString.substring(mimeString.lastIndexOf('/') + 1);
        formData.append('media', binaryFile, 'uploadFile.'+fileExtension);
    
        // Append other data to the FormData object
        formData.append('ePID', ePID);
        formData.append('ext', fileExtension);
        formData.append('type', utype);
        formData.append('editor', this.whoIs);
        // Send the FormData object to the server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '../.ht/API/upload.php', true);


        // Track the progress of the upload
        if (utype == 'dpUploads') {
          xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
              var percentComplete = (event.loaded / event.total) * 100;
              document.querySelector('#uploadDbButton').innerHTML = `Uploading ${percentComplete.toFixed(2)}%`;
              // Update the UI or perform actions based on the progress
            }
          });
        }else if(utype == 'image'){
          xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
              var percentComplete = (event.loaded / event.total) * 100;
              var progress = document.querySelector('#uploadProgressDiv');
              progress.innerHTML = `${percentComplete.toFixed(2)}%`;
              progress.style.width = `${percentComplete.toFixed(2)}%`;
              // Update the UI or perform actions based on the progress
            }
          });
        }
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // Upload successful, handle the response
            var response = JSON.parse(xhr.responseText);
            if (response.Result) {
              if (utype == 'dpUploads') {
                document.querySelector('#uploadDbButton').innerHTML = `Processing`;
                setTimeout(function(){
                  location.reload();
                }, 3000);
              }else if (utype == 'image') {
                document.querySelector('#uploadProgressDiv').innerHTML = `processing`;
                setTimeout(function(){
                  location.reload();
                }, 3000);
              }
            }else{
              document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').style.display = 'block' ;
              document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').innerHTML = 'Someting Went Wrong' ;
            }
          } else {
            // Upload failed, handle the error
            console.log('Upload failed. Error: ' + xhr.status);
          }
        });
    
        xhr.send(formData);
    }
    //*******Image Upload************/ 


    //*******Video Upload************/ 
    uploadVideo(fileInput) {
      var self = this;
      var videoPreview = document.getElementById('tempVideo');
      var tempBoxVideo = document.getElementById('tempUploadBoxVideo');
      var uploadBox = document.getElementById('uploadBox');
      videoPreview.innerHTML = '';
      tempBoxVideo.style.display = 'flex';
      uploadBox.style.display = 'none';
      var reader = new FileReader();
      reader.onload = function (e) {
        var videoElement = document.createElement("video");
        videoElement.style.maxWidth = "100%";
        videoElement.style.maxHeight = "100%";
        videoElement.style.width = "100%";
        videoElement.style.height = "100%";
        var videoURL = URL.createObjectURL(fileInput.files[0]);
        videoElement.src = videoURL;
        videoPreview.appendChild(videoElement);
        var file = fileInput.files[0];
        self.uploadVideoToServer(file, 'video');
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
    uploadVideoToServer(file, utype) {
      var filename = file.name;
      var extension = filename.split('.').pop();
      var formData = new FormData();
      formData.append('type', utype);
      formData.append('ePID', ePID);
      formData.append('ext', extension);
      formData.append('editor', this.whoIs);
      formData.append('media', file);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../.ht/API/upload.php', true);
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          var percentComplete = (event.loaded / event.total) * 100;
          var progress = document.querySelector('#uploadProgressDivVideo');
          progress.innerHTML = `${percentComplete.toFixed(2)}%`;
          progress.style.width = `${percentComplete.toFixed(2)}%`;
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          // Upload successful, handle the response
          var response = JSON.parse(xhr.responseText);
          if (response.Result) {
            document.querySelector('#uploadProgressDivVideo').innerHTML = `processing`;
            setTimeout(function(){
            location.reload();
          }, 3000);
          }else{
            document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').style.display = 'block' ;
            document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').innerHTML = 'Someting Went Wrong' ;
          }
        } else {
          document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').style.display = 'block' ;
          document.querySelector('.uploadDpDiv .uploadDpContainer #errorMessage').innerHTML = 'Someting Went Wrong' ;
          console.log('Upload failed. Error: ' + xhr.status);
        }
      });
      xhr.send(formData);

    }

    
    //*******Video Upload************/ 

    //*******Photo/Video Upload************/
    dataURItoBlob(dataURI) {
      // Convert base64 to raw binary data held in a string
      var byteString = atob(dataURI.split(',')[1]);
    
      // Separate the MIME type from the base64 data
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
      // Write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
    
      // Create a Blob object from the ArrayBuffer
      return new Blob([ab], { type: mimeString });
    }
    removeImage() {
      document.querySelector('#uploadDbButton').style.display = 'none';
      document.querySelector('#removeImage').style.display = 'none';
      if (this.croppie) {
        this.croppie.destroy(); // Destroy the Croppie instance
        this.croppie = null;
      }
      document.getElementById('uploadInputFile').value = ''; // Clear the file input value
      document.getElementById('uploadFileLabel').style.display = 'flex'; // Show the upload file label
      // Add any additional code to reset the UI or perform other tasks
    }
    
      
}
document.addEventListener('DOMContentLoaded', function() {
    new showMenus();
});


function follow(){
  var followButton = document.getElementById('followButton');
  followButton.innerHTML = '...';

  const followUser = async () =>{
      const url = '/.ht/API/follow.php/?follow';
      var encyDat = {
        'username': `${currentUsername}`
      };
      const response = await fetch(url, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(encyDat)
        });
      var data = await response.json();

      if (data) {
        if (data.Result) {
          followButton.innerHTML = 'Followed';
          followButton.setAttribute( "onClick", "javascript: unfollow();");
        }else{
        followButton.innerHTML = `${data.message}`;
        }
      }else{
          followButton.innerHTML = `${data.message}`;
      }
    }
    followUser();
}


function unfollow(){
  var followButton = document.getElementById('followButton');
  followButton.innerHTML = '...';

  const unfollowUser = async () =>{
      const url = '/.ht/API/follow.php/?unfollow';
      var encyDat = {
        'username': `${currentUsername}`
      };
      const response = await fetch(url, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(encyDat)
        });
      var data = await response.json();

      if (data) {
        if (data.Result) {
          followButton.innerHTML = 'Follow';
          followButton.setAttribute( "onClick", "javascript: follow();");
        }else{
          followButton.innerHTML = "Can't  unfollow";
        }
      }else{
          followButton.innerHTML = "Can't  unfollow";
      }
    }
    unfollowUser();
}

function showPicOptions(no){
  var options = document.querySelector(`.uploadedFile .uploadDivInside #picOptions${no}`);
  var isDisp = options.style.display;
  if(isDisp == 'none'){
      options.style.display = 'block';
  }else{
      options.style.display = 'none';
  }
}
function showImage(path){
  var showImageDiv = document.getElementById('imageShowDiv');
  if (showImageDiv.style.display == 'none') {
    showImageDiv.style.display = 'flex';
    var showContainer = document.querySelector('#imageShowDiv .imageContainer');
    showContainer.innerHTML = `<i class="fa fa-times fa-xl" onclick="removeImage()"></i>
                               <img src="${path}" alt=""></img>`;
    disbaleScroll();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

function showVideo(path){
  var showImageDiv = document.getElementById('imageShowDiv');
  if (showImageDiv.style.display == 'none') {
    showImageDiv.style.display = 'flex';
    var showContainer = document.querySelector('#imageShowDiv .imageContainer');
    showContainer.innerHTML = `<i class="fa fa-times fa-xl" onclick="removeImage()"></i>
                               <video controls controlsList="nodownload"> <source src="${path}" type="video/mp4"></vide>`;
    disbaleScroll();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

function removeImage(){
  var showImageDiv = document.getElementById('imageShowDiv');
  if (showImageDiv.style.display != 'none') {
    var showContainer = document.querySelector('#imageShowDiv .imageContainer');
    showContainer.innerHTML = ``;
    showImageDiv.style.display = 'none';
    enableScroll();
  }
}

function changeImageVisibility(imgID, no, whois){
  var field = document.getElementById(`visibilityAccess${no}`);
  const changeVisibility = async () =>{
    const url = '/.ht/API/deletePic.php';
    var encyDat = {
      'purpose': 'visibility',
      'imgID': `${imgID}`,
      'personID':`${ePID}`,
      'whois':`${whois}`,
      'value':`${field.value}`
    };
    const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(encyDat)
      });
    var data = await response.json();

    if (data) {
      if (data.Result) {
        location.reload();
      }else{
        alert(`${data.message}`);
      }
    }else{
      alert( "Can't Change");
    }
  }
  changeVisibility();
}

function deleteImage(imgID, ext, no, whois, what){
  var delOpt = document.getElementById(`delOpt${no}`);
  var pic = document.getElementById(`photo${no}`);
  

  function loadingAnimation() {
    let dots = ''; // Initialize the dots
  
    function updateDots() {
      document.getElementById(`delOpt${no}`).innerHTML = 'deleting'+ dots;
      dots += '.'; // Increase the number of dots
      if (dots.length > 5) {
        dots = ''; // Reset the dots to start again
      }
    }
  
    setInterval(updateDots, 100); // Call updateDots every 300ms
  }
  
  loadingAnimation();

 
 
  const deleteImageAPI = async () =>{
    const url = '/.ht/API/deletePic.php';
    var encyDat = {
      'purpose':'delete',
      'imgID': `${imgID}`,
      'extension': `${ext}`,
      'personID':`${ePID}`,
      'whois':`${whois}`,
      'what' : `${what}`
    };
    const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(encyDat)
      });
      var data = await response.json();
    if (data) {
      if (data.Result) {
        setTimeout(function(){
          pic.style.display = 'none';
        }, 3000);
        
      }else{
        delOpt.innerHTML = `${data.message}`;
      }
    }else{
      delOpt.innerHTML = "Can't Delete";
    }
  }
  deleteImageAPI();
}


function requestCreation(){
  var field =  document.getElementById('reqCreation');
  const requestCreate = async () =>{
    const url = '/.ht/API/reqCreation.php';
    var encyDat = {
      'purpose' : 'request',
      'personID' : `${ePID}`,
    };
    const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(encyDat)
      });
    var data = await response.json();
    if (data) {
      if (data.Result) {
        field.innerHTML = 'Requested';
      }else{
        field.innerHTML = `${data.message}`;
      }
    }else{
      field.innerHTML = 'Something went wrong';
    }
  }

  requestCreate();
}


function responseCreation(val){
  var button = document.querySelector(`.reqCreationButton.${val}button`);
  const responseCreate = async () =>{
    const url = '/.ht/API/reqCreation.php';
    var encyDat = {
      'purpose' : 'response',
      'personID' : `${ePID}`,
      'value' : `${val}`
    };
    const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(encyDat)
      });
    var data = await response.json();
    if (data) {
      if (data.Result) {
        if (val == 'ACC') {
          button.innerHTML = 'Accepted';
        }else{
          button.innerHTML = 'Rejected';
        }
      }else{
        button.innerHTML = `${data.message}`;
      }
    }else{
      button.innerHTML = 'Something went wrong';
    }
  }

  responseCreate();
}










