class DeleteAccount{

    constructor(){
        this.errorDiv = document.querySelector('#dErrorDiv');
        this.dErrorDivInside = document.querySelector('#dErrorDiv #dErrorDivInside');
        this.deletingDiv = document.querySelector('.delete-account .deleting-progress');
        this.deletingCriteria = document.querySelector('.delete-account .delete-criteria');
        this.dispMessage = document.getElementById('editDelmessage');
        this.errorDiv.style.display = 'none';
        this.dErrorDivInside.style.display = 'none';
    }

    deleteWithUsername(){
        var uploadDel;
        var contentDel;
        var userDataDel;
        var username = document.querySelector('.delete-account #currentUsernameDelete');
        if (username.value == currentUsername) {
            this.deletingDiv.style.display = 'block';
            this.deletingCriteria.style.display = 'none';
            // Deleting Uploads
            const deleteUploads = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'username' : `${username.value}`,
                  'name' : 'uploads',
                  'with': 'username'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                    uploadDel = true;
                    document.querySelector('#deleteUploads i').style.display= 'block';
                }else{
                    uploadDel = false;
                    document.querySelector('#deleteUploads i').style.display= 'block';
                    document.querySelector('#deleteUploads i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteUploads i').style.display.classList.add('fa-xmark');
                }
            }
            // deleting Contents
            const deleteContents = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'username' : `${username.value}`,
                  'name' : 'contents',
                  'with': 'username'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                  contentDel = true;
                    document.querySelector('#deleteContents i').style.display= 'block';
                }else{
                  contentDel = false;
                    document.querySelector('#deleteContents i').style.display= 'block';
                    document.querySelector('#deleteContents i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteContents i').style.display.classList.add('fa-xmark');
                }
            }

            // Deleting User Data
            const deleteUserData = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'username' : `${username.value}`,
                  'name' : 'userData',
                  'with': 'username'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                  userDataDel = true;
                    document.querySelector('#deleteUserData i').style.display= 'block';
                }else{
                  userDataDel = false;
                    document.querySelector('#deleteUserData i').style.display= 'block';
                    document.querySelector('#deleteUserData i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteUserData i').style.display.classList.add('fa-xmark');
                }
            }

            // Implementing
            deleteUploads();
            deleteContents();
            deleteUserData();

            if (uploadDeleted && contentDeleted && userDataDeleted) {
                document.querySelector('#deleteFinish i').style.display= 'block';
            }else{
                this.errorDiv.style.display = 'block';
                this.dErrorDivInside.style.display = 'block';
                this.dispMessage.innerHTML = 'Problem With deleting';
            }
        }else{
            this.errorDiv.style.display = 'block';
            this.dErrorDivInside.style.display = 'block';
            this.dispMessage.innerHTML = 'Username not correct';
        }
    }


    deleteWithPassword(){
        var uploadDel;
        var contentDel;
        var userDataDel;
        var password = document.querySelector('.delete-account #currentPasswordDelete');
        if (password.value.length <= 1) {
            this.dispMessage.innerHTML = 'Password required';
        }else{
            this.deletingDiv.style.display = 'block';
            this.deletingCriteria.style.display = 'none';
            // Deleting Uploads
            const deleteUploads = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'password' : `${password.value}`,
                  'name' : 'uploads',
                  'with': 'password'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                    uploadDel = true;
                    document.querySelector('#deleteUploads i').style.display= 'block';
                }else{
                    uploadDel = false;
                    document.querySelector('#deleteUploads i').style.display= 'block';
                    document.querySelector('#deleteUploads i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteUploads i').style.display.classList.add('fa-xmark');
                }
            }
            // deleting Contents
            const deleteContents = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'password' : `${password.value}`,
                  'name' : 'contents',
                  'with': 'password'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                    contentDel = true;
                    document.querySelector('#deleteContents i').style.display= 'block';
                }else{
                    contentDel = false;
                    document.querySelector('#deleteContents i').style.display= 'block';
                    document.querySelector('#deleteContents i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteContents i').style.display.classList.add('fa-xmark');
                }
            }

            // Deleting User Data
            const deleteUserData = async()=>{
                const url = '/.ht/API/deleteAccount.php';
                var encyDat = {
                  'personID' : `${ePID}`,
                  'password' : `${password.value}`,
                  'name' : 'userData',
                  'with': 'password'
                };
                const response = await fetch(url, {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(encyDat)
                  });
                var data = await response.json();
                if (data.Result) {
                    userDataDel = true;
                    document.querySelector('#deleteUserData i').style.display= 'block';
                }else{
                    userDataDel = false;
                    document.querySelector('#deleteUserData i').style.display= 'block';
                    document.querySelector('#deleteUserData i').style.display.classList.remove('fa-check');
                    document.querySelector('#deleteUserData i').style.display.classList.add('fa-xmark');
                }
            }

            // Implementing
            deleteUploads();
            deleteContents();
            deleteUserData();

            if (uploadDeleted && contentDeleted && userDataDeleted) {
                document.querySelector('#deleteFinish i').style.display= 'block';
            }else{
                this.errorDiv.style.display = 'block';
                this.dErrorDivInside.style.display = 'block';
                this.dispMessage.innerHTML = 'Problem With deleting';
            }
        }
    }
}
var deleteAccount = new DeleteAccount();