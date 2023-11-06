class LoadStories {
  constructor() {
    this.showLoading();
    this.lastStoryTime;
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
          this.renderVariable = [];
          this.renderStories(parsedJSON);
        }else{
          alert(data.message);
        }
      }else{
          alert('Problem 2');
      }
  }


  renderStories(parsedJSON){
    var storiesDiv = document.getElementById('storiesDiv');
    var storiesView = ['1', '2','2', '1', '1', '1', '2', '2', '2'];
    if (parsedJSON.length < 8) {
      document.getElementById('homepageLoader').style.display = 'none';
    }
    for (var i = 0; i < parsedJSON.length; i++) {
      this.lastStoryTime = parsedJSON[i].lastPublished;
      var whatToView = storiesView[i];
      var timeAgo = this.getTimeAgo(parsedJSON[i].lastPublished);
      if (whatToView == '1') {
        this.renderVariable[i] =  `
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
                <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                <span class="date">${timeAgo}</span>
                <i class="fa fa-ellipsis-v" onclick=""></i>
            </div>
        </div>`;
      }else{
          this.renderVariable[i] = `
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
                <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                <span class="date">${timeAgo}</span>
                <i class="fa fa-ellipsis-v" onclick=""></i>
            </div>
        </div>`;
      }
    }
    if (this.renderVariable.length) {
      storiesDiv.innerHTML = '';
      for (var j = 0; j < this.renderVariable.length; j++) {
        storiesDiv.innerHTML += this.renderVariable[j];
      }
    }
  }



  renderNewStories(parsedJSON){
    var storiesDiv = document.getElementById('storiesDiv');
    var storiesView = ['1', '2','2', '1', '1', '1', '2', '2', '2'];
    if (parsedJSON.length < 8) {
      document.getElementById('homepageLoader').style.display = 'none';
    }
    for (var i = 0; i < parsedJSON.length; i++) {
      this.lastStoryTime = parsedJSON[i].lastPublished;
      var whatToView = storiesView[i];
      var timeAgo = this.getTimeAgo(parsedJSON[i].lastPublished);
      if (whatToView == '1') {
        this.renderVariable[i] =  `
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
                <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                <span class="date">${timeAgo}</span>
                <i class="fa fa-ellipsis-v" onclick=""></i>
            </div>
        </div>`;
      }else{
          this.renderVariable[i] = `
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
                <span class="cat"> <a href="">${parsedJSON[i].category}</a> </span>
                <span class="date">${timeAgo}</span>
                <i class="fa fa-ellipsis-v" onclick=""></i>
            </div>
        </div>`;
      }
    }
    if (this.renderVariable.length) {
      storiesDiv.innerHTML = '';
      for (var j = 0; j < this.renderVariable.length; j++) {
        storiesDiv.innerHTML += this.renderVariable[j];
      }
    }
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

}

loadStoriesAndAccessLastStoryTime();
