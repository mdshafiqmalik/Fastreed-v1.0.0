var story = document.getElementById('app');
var ampStory = document.createElement('amp-story');
ampStory.setAttribute("class", "NWSStory");
ampStory.setAttribute("publisher", "fastreed");
ampStory.setAttribute("standalone", "");
ampStory.setAttribute("title", `${storyData.metaData.title}`);
var mainPoster;
var date =  `${storyData.metaData.date}`;
if (storyData.layers.L0.media.url == '' || storyData.layers.L0.media.url == 'default') {
  mainPoster = "/assets/img/default.jpeg";
  ampStory.setAttribute("poster-portrait-src", "/assets/img/default.jpeg");
}else{
  mainPoster = `"${storyData.layers.L0.media.url}"`;
  ampStory.setAttribute("poster-portrait-src", `${storyData.layers.L0.media.url}`);
}
story.appendChild(ampStory);
var totalLayers = Object.keys(storyData.layers).length;
for (let  i= 0; i < totalLayers; i++) {
  var objectFit  = storyData.layers['L'+i].media.styles.mediaFit;
  var overlayOpacity  = storyData.layers['L'+i].media.styles.overlayOpacity;
  var titleFontSize  = storyData.layers['L'+i].title.fontSize;
  var titleFontFamily  = storyData.layers['L'+i].title.fontFamily;
  var titleFontWeight  = storyData.layers['L'+i].title.fontWeight;
  if (i == 0) {
    ampStory.innerHTML += `
    <amp-story-page id="Story_page_${i+1}_Template_id_7" class="NWSStory-scene" data-type="standard" data-layout="2">
     <amp-story-grid-layer class="NWSStory-scene-content" template="fill">
     <div class="NWSStory-layers NWSStory-layers--fixed"></div>
     <div class="NWSStory-layers NWSStory-layers--unfixed">
        <div class="NWSStory-layers-group NWSStory-layers-group--media">
          <div class="NWSStory-layer NWSStory-layer--img">
            <div class="NWSStory-layer-content">
               <amp-img src= ${mainPoster} width="720" height="1280" layout="flex-item" class="" object-fit = "${objectFit}">
               <div class="storyOverlay" height="100%" width="100%" style="position:absolute;top:0px;left:0px;width: 720px;height: 1080px;background: rgb(0 0 0 / ${overlayOpacity}%);z-index: 9;"></div>
               </amp-img>
            </div>
          </div>
        </div>
        <div class="NWSStory-layer NWSStory-layer--overlay story-grd-layer"></div>
        <div class="NWSStory-layers-group NWSStory-layers-group--content" style="padding:40px 20px">
          <div animate-in="fly-in-top" animate-in-delay="1s" animate-in-duration=".5s" class="NWSStory-layer" style="margin-top:120px">
            <p class="fade-in" style="font:18px/1.1 Poppins-regular;font-weight:700;padding-bottom:15px;text-align:center;margin:auto">October 23, 2023</p>
          </div>
          <div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
            <h1 class="fade-in" style="font:${titleFontSize} ${titleFontFamily};font-weight:${titleFontWeight};letter-spacing:0.72px;padding-bottom:15px;text-align:center;">${storyData.metaData.title}</h1>
          </div>
          <div animate-in="fly-in-bottom" animate-in-delay="1.0s" animate-in-duration=".3s" class="NWSStory-layer align-self-center" style="position:absolute;bottom:0">
            <p style="font-family:helvetica;font-size:10px;color:rgba(255, 255, 255, 1);margin-bottom:30px;text-align:center;letter-spacing:1px">Image Courtesy: none</p>
          </div>
        </div>
      </div>
     </amp-story-grid-layer>
    `;
  }else if(storyData.layers['L'+ i].media.type == "video"){
    console.log(storyData.layers['L'+ i]);
    var textFontSize  = storyData.layers['L'+i].otherText.fontSize;
    var textFontFamily  = storyData.layers['L'+i].otherText.fontFamily;
    var textFontWeight  = storyData.layers['L'+i].otherText.fontWeight;
    if (storyData.layers['L'+i].media.url == "" ||  storyData.layers['L'+i].media.url == "default") {
      var backgroundVideo  = "";
        var poster= "/assets/img/default.jpeg";
    }else{
      var backgroundVideo = storyData.layers['L'+i].media.url;
        var poster=  storyData.layers['L'+i].media.url;
    }

    if(storyData.layers['L'+i].textVisibility == '' ||   storyData.layers['L'+i].textVisibility == 'false'){
      var text = ``;
    }else{
      var text = `
      <div animate-in="fly-in-right" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
        <div style="text-align:left;color:#fff;background-color:rgba(65,120,252, 0.7);font:${storyData.layers['L'+i].title.fontSize} ${storyData.layers['L'+i].title.fontFamily};font-weight:${storyData.layers['L'+i].title.fontWeight};padding:14px 30px;letter-spacing:1px">${storyData.layers['L' + i].title.text}</div>
      </div>
      <div animate-in="fade-in" animate-in-delay=".8s" animate-in-duration=".5s" class="NWSStory-layer" style="margin-bottom:50px">
        <div style="text-align:left;color:#fff;background-color:rgba(0,0,0,0.7);font:${storyData.layers['L'+i].otherText.fontSize} ${storyData.layers['L'+i].otherText.fontFamily};padding:15px 30px 24px; font-weight:${storyData.layers['L'+i].otherText.fontWeight};" class="description ">
          <p>${storyData.layers['L' + i].otherText.text}</p>
        </div>
      </div>`;
    }

    ampStory.innerHTML += `
    <amp-story-page class="NWSStory-scene" data-layout="7" data-type="standard" id="Story_page_${i+1}_Template_id_5">
      <amp-story-grid-layer class="NWSStory-scene-content" template="vertical">
        <div class="NWSStory-layers NWSStory-layers--fixed"></div>
        <div class="NWSStory-layers NWSStory-layers--unfixed">
          <div class="NWSStory-layers-group NWSStory-layers-group--media">
            <div class="NWSStory-layer NWSStory-layer--img">
              <div class="NWSStory-layer-content">
                <amp-video
                  autoplay
                  width="720"
                  height="1280"
                  poster="${poster}"
                  object-fit="${objectFit}"
                  controls
                  class="zoom-in"
                  id ="storyImage${i}"
                  >
                  <div class="storyOverlay" height="100%" width="100%" style="position:absolute;top:0px;left:0px;width: 720px;height: 1080px;background: rgb(0 0 0 / ${overlayOpacity}%);z-index: 9;"></div>
                  <source src="${backgroundVideo}" type="video/mp4">
                </amp-video>
              </div>
            </div>
          </div>
          <div class="NWSStory-layer NWSStory-layer--overlay">
            <div class="NWSStory-layer-content" style="opacity:1;background:linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 20%)"></div>
          </div>
          <div class="NWSStory-layers-group NWSStory-layers-group--content" style="padding:55px 24px 20px;justify-content:flex-end">
          ${text}
            <div animate-in="fly-in-bottom" animate-in-delay="1.0s" animate-in-duration=".3s" class="NWSStory-layer align-self-center" style="position:absolute;bottom:0">
              <p style="font-family:helvetica;font-size:10px;color:rgba(255, 255, 255, 1);margin-bottom:30px;text-align:center;letter-spacing:1px">Video Credit: ${storyData.layers['L' + i].media.credit}</p>
            </div>
          </div>
        </div>
      </amp-story-grid-layer>
    </amp-story-page>`;

  }else{

    var textFontSize  = storyData.layers['L'+i].otherText.fontSize;
    var textFontFamily  = storyData.layers['L'+i].otherText.fontFamily;
    var textFontWeight  = storyData.layers['L'+i].otherText.fontWeight;

    if (storyData.layers['L'+i].media.url == "" ||  storyData.layers['L'+i].media.url == "default") {
      var backgroundImage = "/assets/img/default.jpeg";
    }else{
      var backgroundImage = storyData.layers['L'+i].media.url;
    }
    let text = `<div style="padding:15px 30px 24px"></div>`;
    if (storyData.layers['L' +i].otherText.text != '') {
      text = `<div animate-in="fade-in" animate-in-delay=".8s" animate-in-duration=".5s" class="NWSStory-layer" style="font-weight:${textFontWeight}; margin-bottom:50px">
        <div style="text-align:left;color:#fff;background-color:rgba(0,0,0,0.7);font:${textFontSize}  ${textFontFamily};padding:15px 30px 24px" class="description ">
          <p>${storyData.layers['L' + i].otherText.text}</p>
        </div>
      </div>`;
    }

    ampStory.innerHTML +=
    `<amp-story-page class="NWSStory-scene" data-layout="7" data-type="standard" id="Story_page_${i+1}_Template_id_5">
        <amp-story-grid-layer class="NWSStory-scene-content" template="vertical">
          <div class="NWSStory-layers NWSStory-layers--fixed"></div>
          <div class="NWSStory-layers NWSStory-layers--unfixed">
            <div class="NWSStory-layers-group NWSStory-layers-group--media">
              <div class="NWSStory-layer NWSStory-layer--img">
                <div class="NWSStory-layer-content">
                  <amp-img src="${backgroundImage}" id ="storyImage${i}" object-fit="${objectFit}" class=" zoom-in" alt=" " title=" " layout="flex-item">
                  <div class="storyOverlay" height="100%" width="100%" style="position:absolute;top:0px;left:0px;width: 720px;height: 1080px;background: rgb(0 0 0 / ${overlayOpacity}%);z-index: 9;"></div>
                  </amp-img>
                </div>
              </div>
            </div>
            <div class="NWSStory-layer NWSStory-layer--overlay">
              <div class="NWSStory-layer-content" style="opacity:1;background:linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 20%)"></div>
            </div>
            <div class="NWSStory-layers-group NWSStory-layers-group--content" style="padding:55px 24px 20px;justify-content:flex-end">
              <div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
                <div style="text-align:left;color:#fff;background-color:rgba(65,120,252, 0.7);font:${titleFontSize} ${titleFontFamily}; font-weight:${titleFontWeight}; padding:14px 30px; letter-spacing:1px">${storyData.layers['L' + i].title.text}</div>
              </div>
              ${text}
              <div animate-in="fly-in-bottom" animate-in-delay="1.0s" animate-in-duration=".3s" class="NWSStory-layer align-self-center" style="position:absolute;bottom:0">
                <p style="font-family:helvetica;font-size:10px;color:rgba(255, 255, 255, 1);margin-bottom:30px;text-align:center;letter-spacing:1px">Image Courtesy: ${storyData.layers['L' + i].media.credit}</p>
              </div>
            </div>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>`;
  }
}
if (relatedStory != '') {
  var relatedStoryTitle = relatedStory.title;
  var relatedStoryDescription = relatedStory.description;
  var relatedStoryUrl = relatedStory.url;
  var relatedStoryData = JSON.parse(relatedStory.storyData);
  var relatedStoryImage = relatedStoryData.layers.L0.media.url;
  relatedStoryUrl = '/webstories/'+ relatedStoryUrl;
  ampStory.innerHTML += `
   <amp-story-page class="NWSStory-scene" data-layout="2" data-type="standard" id="Story_page_9_Template_id_12">
  		<amp-story-grid-layer class="NWSStory-scene-content" template="vertical">
  			<div class="NWSStory-layers NWSStory-layers--fixed"></div>
  			<div class="NWSStory-layers NWSStory-layers--unfixed">
  				<div class="NWSStory-layers-group NWSStory-layers-group--media">
  					<div class="NWSStory-layer NWSStory-layer--img">
  						<div class="NWSStory-layer-content" animate-in="fade-in" animate-in-delay="1s" animate-in-duration=".5s">
  							<div class="NWSStory-layer NWSStory-layer--img">
  								<div class="NWSStory-layer-content">
  									<amp-img src="${relatedStoryImage}" class="" alt="" title="tu-jhoothi-main-makkar-netflix-streaming-soon-1-64524047017c2" layout="flex-item"></amp-img>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  				<div class="NWSStory-layer NWSStory-layer--overlay story-grd-layer"></div>
  				<div class="NWSStory-layers-group NWSStory-layers-group--content" style="padding:3.3125rem 6.944444444444445% 1.875rem">
  					<div style="width:100%;margin:0 auto 3.125rem auto">
  						<div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer" style="margin-bottom:1.25rem">
  							<div style="background:linear-gradient(to right, #97c445, #319b3f);;width:59px;height:6px;margin:0 auto 1.125rem auto"></div>
  							<h1 class="ipl-story-sub-headline m-b-15" style="font-size:1.4rem">${relatedStoryTitle}</h1>
  						</div>
  						<div animate-in="fly-in-right" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
  							<div style="color:#fff;font-weight:400" class="ipl-story-desc m-b-10">${relatedStoryDescription}</div>
  						</div>
  						<div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
  							<p class="ipl-story-credit"></p>
  						</div>
  					</div>
  				</div>
  			</div>
  		</amp-story-grid-layer>
  		<amp-story-page-outlink class="NWSStory-AMP-CTA is-background--solid" layout="nodisplay" theme="custom" cta-accent-element="background" cta-accent-color="blue">
  			<a href="${relatedStoryUrl}" class="cls_shop_buy_button_8"><span>Read Full Story</span></a>
  		</amp-story-page-outlink>
  	</amp-story-page>`;
}else{
  ampStory.innerHTML += `
   <amp-story-page class="NWSStory-scene" data-layout="2" data-type="standard" id="Story_page_9_Template_id_12">
      <amp-story-grid-layer class="NWSStory-scene-content" template="vertical">
        <div class="NWSStory-layers NWSStory-layers--fixed"></div>
        <div class="NWSStory-layers NWSStory-layers--unfixed">
          <div class="NWSStory-layers-group NWSStory-layers-group--media">
            <div class="NWSStory-layer NWSStory-layer--img">
              <div class="NWSStory-layer-content" animate-in="fade-in" animate-in-delay="1s" animate-in-duration=".5s">
                <div class="NWSStory-layer NWSStory-layer--img">
                  <div class="NWSStory-layer-content">
                    <amp-img src="/assets/img/screen.jpeg" class="" alt="" title="tu-jhoothi-main-makkar-netflix-streaming-soon-1-64524047017c2" layout="flex-item"></amp-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="NWSStory-layer NWSStory-layer--overlay story-grd-layer"></div>
          <div class="NWSStory-layers-group NWSStory-layers-group--content" style="padding:3.3125rem 6.944444444444445% 1.875rem">
            <div style="width:100%;margin:0 auto 3.125rem auto">
              <div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer" style="margin-bottom:1.25rem">
                <div style="background:linear-gradient(to right, #97c445, #319b3f);;width:59px;height:6px;margin:0 auto 1.125rem auto"></div>
                <h1 class="ipl-story-sub-headline m-b-15" style="font-size:1.4rem">Do you want to write and publish story like this?</h1>
              </div>
              <div animate-in="fly-in-right" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
                <div style="color:#fff;font-weight:400" class="ipl-story-desc m-b-10">The creater access verification is opened you can request to become a creater. Creater can create and publish visual stories like this.</div>
              </div>
              <div animate-in="fly-in-left" animate-in-delay="0.5s" animate-in-duration=".3s" class="NWSStory-layer">
                <p class="ipl-story-credit"></p>
              </div>
            </div>
          </div>
        </div>
      </amp-story-grid-layer>
      <amp-story-page-outlink class="NWSStory-AMP-CTA is-background--solid" layout="nodisplay" theme="custom" cta-accent-element="background" cta-accent-color="blue">
        <a href="/account/" class="cls_shop_buy_button_8"><span>Click Here</span></a>
      </amp-story-page-outlink>
    </amp-story-page>`;
}
