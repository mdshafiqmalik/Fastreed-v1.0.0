class LoadStories {
  constructor() {
    this.showLoading();
    this.lastStoryTime;
    this.allWebstoryData;
  }

  showLoading(){
    var storiesDiv = document.getElementById('storiesDiv');
    var mediumCard =`<div class="f-card f-card_medium fading-div" style="border-radius:20px; min-height: 318px;"></div>`;
    var smallCard =`<div class="f-card f-card_small fading-div" style="border-radius:20px; min-height: 198px;"></div>`;
    var largeCard = `<div class="f-card f-card_large fading-div" style="border-radius:20px; min-height: 418px;"></div>`;
    storiesDiv.innerHTML = largeCard +mediumCard + mediumCard + largeCard + largeCard +largeCard + mediumCard + mediumCard;
  }

  async loadLatestStories(){
      const url = '/.ht/API/showWebstories.php';
      var encyDat = {
        'type':'lastest'
      };
      const response = await fetch(url, {
          method: 'post',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(encyDat)
      });
      var data = await response.json();
      var webstoryDiv = document.getElementById('webstories');
      if (data) {
        if (data.Result) {
          let dataJSON = data.message;
          let parsedJSON = JSON.parse(dataJSON);
          this.allWebstoryData = parsedJSON;
          this.renderStories(parsedJSON);
        }else{
          alert(data.message);
        }
      }else{
          alert('Problem at our end (x038)');
      }
  }


  renderStories(parsedJSON){
    var storiesDiv = document.getElementById('storiesDiv');
    var storiesView = ['1', '2','2', '1', '1', '1', '2', '2', '2'];
    if (parsedJSON.length < 8) {
      document.getElementById('homepageLoader').style.display = 'none';
    }
    var renderVariable = [];
    for (var i = 0; i < parsedJSON.length; i++) {
      this.lastStoryTime = parsedJSON[i].lastPublished;
      var whatToView = storiesView[i];
      var timeAgo = this.getTimeAgo(parsedJSON[i].lastPublished);
      var views = this.viewsConverter(parsedJSON[i].totalViews);
      var jsonString = parsedJSON[i].storyID;
      if (whatToView == '1') {
        renderVariable[i] =  `
        <div class="f-card f-card_large">
            <div class="image">
                <img class="storyMetaImage" src="${parsedJSON[i].image}" alt="">
                <a href="/webstories/${parsedJSON[i].url}" class="storyLink">
                    <div class="overlay">
                        <div class="top-overlay">
                          <div class="st-logo">
                            <svg fill="none" viewBox="0 0 22 22">
                              <path fill="url(#a)" fill-rule="evenodd" d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm.703-12.362l3.83 1.295L8.79 19l2.04-6.638L7 11.067 13.744 3l-2.041 6.638z" clip-rule="evenodd"></path>
                              <defs>
                                <linearGradient id="a" x1="11" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#4364FF"></stop>
                                  <stop offset="1" stop-color="#0037FF"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div class="title">
                              <p> ${parsedJSON[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="meta">
                <div class="metaInfo">
                  <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                  <span class="date">${timeAgo}</span>
                  <span class="date">${views}
                  <i class="fa-regular fa-eye"></i>
                  </span>
                </div>
                <div class="metaOptions" onclick="showDialogueBox('${jsonString}')">
                  <i class="fa fa-ellipsis-v"></i>
                </div>
            </div>
        </div>`;
      }else{
          renderVariable[i] = `
        <div class="f-card f-card_medium">
            <div class="image">
                <img class="storyMetaImage" src="${parsedJSON[i].image}" alt="">
                <a href="/webstories/${parsedJSON[i].url}" class="storyLink">
                    <div class="overlay">
                      <div class="top-overlay">
                        <div class="st-logo">
                          <svg fill="none" viewBox="0 0 22 22">
                            <path fill="url(#a)" fill-rule="evenodd" d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm.703-12.362l3.83 1.295L8.79 19l2.04-6.638L7 11.067 13.744 3l-2.041 6.638z" clip-rule="evenodd"></path>
                            <defs>
                              <linearGradient id="a" x1="11" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4364FF"></stop>
                                <stop offset="1" stop-color="#0037FF"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                        <div class="title">
                            <p> ${parsedJSON[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="meta">
                <div class="metaInfo">
                  <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                  <span class="date">${timeAgo}</span>
                  <span class="date">${views}
                  <i class="fa-regular fa-eye"></i>
                  </span>
                </div>
                <div class="metaOptions" onclick="showDialogueBox('${jsonString}')">
                  <i class="fa fa-ellipsis-v"></i>
                </div>
            </div>
        </div>`;
      }
    }
    if (renderVariable.length) {
      storiesDiv.innerHTML = '';
      for (var j = 0; j < renderVariable.length; j++) {
        storiesDiv.innerHTML += renderVariable[j];
      }
    }
  }


 viewsConverter(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(2) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(2) + 'K';
    } else {
      return views.toString();
    }
  }


  async reloadLatestStories(){
      const url = '/.ht/API/showWebstories.php';
      var encyDat = {
        'type':'lastest',
        'reload':`${this.lastStoryTime}`
      };
      const response = await fetch(url, {
          method: 'post',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(encyDat)
      });
      var data = await response.json();
      var webstoryDiv = document.getElementById('webstories');
      if (data) {
        if (data.Result) {
          let dataJSON = data.message;
          let parsedJSON = JSON.parse(dataJSON);
          const concatenatedArray = this.allWebstoryData.slice(); // Create a copy of array1

          Array.prototype.push.apply(concatenatedArray, parsedJSON);
          this.allWebstoryData = concatenatedArray;
          this.renderNewStories(parsedJSON);
        }else{
          alert(data.message);
        }
      }else{
        alert('Problem at our end (x0156)');
      }
  }

  renderNewStories(parsedJSON){
    var storiesDiv = document.getElementById('storiesDiv');
    var storiesView = ['1', '2','2', '1', '1', '1', '2', '2', '2'];
    if (!parsedJSON.length) {
      document.getElementById('homepageLoader').style.display = 'none';
    }
    var renderVariable = [];
    for (var i = 0; i < parsedJSON.length; i++) {
      this.lastStoryTime = parsedJSON[i].lastPublished;
      var howToView = storiesView[i];
      var timeAgo = this.getTimeAgo(parsedJSON[i].lastPublished);
      var views = this.viewsConverter(parsedJSON[i].totalViews);
      var jsonString = parsedJSON[i].storyID;
      if (howToView == '1') {
        renderVariable[i] =  `
        <div class="f-card f-card_large">
            <div class="image">
                <img class="storyMetaImage" src="${parsedJSON[i].image}" alt="">
                <a href="/webstories/${parsedJSON[i].url}" class="storyLink">
                    <div class="overlay">
                        <div class="top-overlay">
                          <div class="st-logo">
                            <svg fill="none" viewBox="0 0 22 22">
                              <path fill="url(#a)" fill-rule="evenodd" d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm.703-12.362l3.83 1.295L8.79 19l2.04-6.638L7 11.067 13.744 3l-2.041 6.638z" clip-rule="evenodd"></path>
                              <defs>
                                <linearGradient id="a" x1="11" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#4364FF"></stop>
                                  <stop offset="1" stop-color="#0037FF"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div class="title">
                              <p> ${parsedJSON[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="meta">
                <div class="metaInfo">
                  <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                  <span class="date">${timeAgo}</span>
                  <span class="date">${views}
                  <i class="fa-regular fa-eye"></i>
                  </span>
                </div>
                <div class="metaOptions" onclick="showDialogueBox('${jsonString}')">
                  <i class="fa fa-ellipsis-v"></i>
                </div>
            </div>
        </div>`;
      }else{
          renderVariable[i] = `
        <div class="f-card f-card_medium">
            <div class="image">
                <img class="storyMetaImage" src="${parsedJSON[i].image}" alt="">
                <a href="/webstories/${parsedJSON[i].url}" class="storyLink">
                    <div class="overlay">
                      <div class="top-overlay">
                        <div class="st-logo">
                          <svg fill="none" viewBox="0 0 22 22">
                            <path fill="url(#a)" fill-rule="evenodd" d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm.703-12.362l3.83 1.295L8.79 19l2.04-6.638L7 11.067 13.744 3l-2.041 6.638z" clip-rule="evenodd"></path>
                            <defs>
                              <linearGradient id="a" x1="11" x2="11" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4364FF"></stop>
                                <stop offset="1" stop-color="#0037FF"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                        <div class="title">
                            <p> ${parsedJSON[i].title}</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="meta">
                <div class="metaInfo">
                  <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                  <span class="date">${timeAgo}</span>
                  <span class="date">${views}
                  <i class="fa-regular fa-eye"></i>
                  </span>
                </div>
                <div class="metaOptions" onclick="showDialogueBox('${jsonString}')">
                  <i class="fa fa-ellipsis-v"></i>
                </div>
            </div>
        </div>`;
      }
    }
    if (renderVariable.length) {
      for (var j = 0; j < renderVariable.length; j++) {
        storiesDiv.innerHTML += renderVariable[j];
      }
    }
      styleUpdate();
  }
  getTimeAgo(unixTime) {
      const currentTime = Date.now(); // Current time in milliseconds
      const timeDiff = currentTime - unixTime; // Calculate the time difference

      if (timeDiff < 60 * 1000) { // Less than 1 minute
          const secondsAgo = Math.floor(timeDiff / 1000);
          return secondsAgo + "s";
      } else if (timeDiff < 60 * 60 * 1000) { // Less than 1 hour
          const minutesAgo = Math.floor(timeDiff / (60 * 1000));
          return minutesAgo + "m";
      } else if (timeDiff < 24 * 60 * 60 * 1000) { // Less than 1 day
          const hoursAgo = Math.floor(timeDiff / (60 * 60 * 1000));
          return hoursAgo + "h";
      } else if (timeDiff < 30 * 24 * 60 * 60 * 1000) { // Less than 30 days (approx. a month)
          const daysAgo = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
          return daysAgo + "d";
      } else if (timeDiff < 365 * 24 * 60 * 60 * 1000) { // Less than 365 days (approx. a year)
          const monthsAgo = Math.floor(timeDiff / (30 * 24 * 60 * 60 * 1000));
          return monthsAgo + "m";
      } else {
          const yearsAgo = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
          return yearsAgo + "Y";
      }
    }


}
var loadLatestStories = new LoadStories();

async function loadStoriesAndAccessLastStoryTime() {
  await loadLatestStories.loadLatestStories(); // Wait for the method to complete
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadLatestStories.reloadLatestStories();
        styleUpdate();
      }
    });
  }
  const observer = new IntersectionObserver(handleIntersection);
  var elementToDetect = document.getElementById('homepageLoader');
  observer.observe(elementToDetect);
}
loadStoriesAndAccessLastStoryTime();

function showDialogueBox(storyID){
  var allData = loadLatestStories.allWebstoryData;
  var associatedData = false;
  for (var i = 0; i < allData.length; i++) {
    if (allData[i].storyID == storyID) {
      associatedData = allData[i];
      break;
    }
  }
  if (associatedData) {
    var alertConatiner = document.querySelector('#alertContainerHome');
    alertConatiner.style.display = 'flex';
    var alertBox = document.querySelector('#alertBoxHome');
    alertBox.innerHTML = `
    <div class="alertHead">
      <div class="title">${associatedData.title}</div>
      <div class="cancel" onclick="hideAlert()">
        <i class="fa-solid fa-circle-xmark fa-xl"></i>
      </div>
    </div>
    <div class="alertBody">
      <div class="options">
        <div class="optionIcon">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="optionName">
          <span>Hide this</span>
        </div>
      </div>

      <div class="options">
        <div class="optionIcon">
          <i class="fa-solid fa-square-share-nodes"></i>
        </div>
        <div class="optionName" onclick="shareSupportedStory('${associatedData.title}', '${associatedData.description}', '${associatedData.url}', '${associatedData.image}')">
          <span>Share this</span>
        </div>
      </div>

      <div class="options">
        <div class="optionIcon">
          <i class="fa-solid fa-user-plus"></i>
        </div>
        <div class="optionName">
          <span>Follow author</span>
        </div>
      </div>

      <div class="options">
        <div class="optionIcon">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <div class="optionName" onclick="openInNewTab('${associatedData.url}')">
          <span>Open in a new tab</span>
        </div>
      </div>

      <div class="options">
        <div class="optionIcon">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        <div class="optionName">
          <span>About Meenakshi Thakur</span>
        </div>
      </div>
    </div>
    `;
  }else{

  }
}


async function shareSupportedStory(title, text, url, element, image){
  var ext = image.split('.').pop();
  url = 'https://www.fastreed.com/webstories' + url;
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${title}`,
        text: `${title}`,
        url: `${url}`,
        files: [new File(['image'], `${image}`, { type: `image/${ext}` })],
      });
    } catch (error) {
      element.innerHTML = "<span style='color:orange;'> Can't share</span>";
    }
  } else {

  }

}
function openInNewTab(url){
  url = '/webstories/'+url;
  window.open(url, '_blank');
  hideAlert();
}
