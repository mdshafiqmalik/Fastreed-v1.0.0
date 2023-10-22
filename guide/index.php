<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Cache-Control" content="public, max-age=3600">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta data-rh="true" name="keywords" content="">
    <meta data-rh="true" name="description" content="Fastreed: Guide">
    <meta data-rh="true" property="og:title" content="Fastreed: Guide">
    <meta data-rh="true" property="twitter:title" content="Fastreed: Guide">
    <meta data-rh="true" property="og:description" content="Fastreed is a Webstories creating and publishing website. Fastreed allow everyone to Read, Write and Share their ideas and knowledge with the world via webstories">
    <meta data-rh="true" property="twitter:description" content="Fastreed is a Webstories creating and publishing website. Fastreed allow everyone to Read, Write and Share their ideas and knowledge with the world via webstories">
    <meta data-rh="true" property="og:image" content="https://www.fastreed.com/favicon.ico">
    <meta data-rh="true" property="twitter:image" content="https://www.fastreed.com/favicon.ico">
    <meta data-rh="true" property="og:url" content="https://www.fastreed.com/guide/">
    <meta data-rh="true" property="og:type" content="website">
    <!-- <meta name="author" content=""> -->
    <link data-rh="true" rel="canonical" href="https://www.fastreed.com/guide/">
    <title>Fastreed: Guide</title>
    <link rel="stylesheet" href="/assets/css/policy.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/css/cropper.min.css?v=1.5.13" rel="stylesheet">
  </head>
  <body>
    <div class="selfContainer">
      <div class="head">
        <div class="headTop">
          <h1>Fastreed <span>Guide</span></h1>
        </div>
        <div class="headMenus">
          <a class="menus" href="/">Home</a>
          <a class="menus" href="/terms-of-services/" >Terms of Services</a>
          <a class="menus" href="/privacy-policy/">Privacy Policy</a>
          <a class="menus " id="aboutMenu" href="/about/">About Us</a>
          <a class="menus active" id="guideMenu" href="#">Guide</a>
        </div>
      </div>
      <div class="body">
        <div class="sideBar">
          <ul class="links">
            <li class="link activeLink" id="menu1"onclick="navigateTo(this, '1')"> What we collect?</li>
            <li class="link" id="menu2"onclick="navigateTo(this, '2')">Advertisements and Promotions</li>
            <li class="link"  id="menu3"onclick="navigateTo(this, '3')">Third Party Links</li>
            <li class="link" id="menu4"onclick="navigateTo(this, '4')">Tracking and Analytics</li>
            <li class="link" id="menu5"onclick="navigateTo(this, '5')">Session and Cookies</li>
            <li class="link" id="menu6"onclick="navigateTo(this, '6')">Conclusion</li>
          </ul>
        </div>
        <div class="mainContent">

          <div class="paragraph">
            <h2 id="p1">What is Fastreed?</h2>
            <p>Fastreed is a Webstories creating and publishing website. It is multi-story writing, multi-blogging or Multi-Niche Blogging website. On fastreed website you will find webstories on multiple topics such as: Sports, Business, Social Media, Technology, Education, Politics, Entertainment etc. written and compiled by many authors (Fastreed authors).</p>
            <p>There is no premium or paid membership on our platform. Fastreed is completey free for everyone.</p>
            <p>Fastreed allow everyone to Read, Write and Share their ideas and knowledge with the world.</p>
            <div class="alert alert-secondary" role="alert">
              As for now only<b> fastreed verified authors</b> can write webstories but soon it will be allowed for public.
              </div>
          </div>
          <div class="paragraph">
            <h2 id="p2">Why Fastreed?</h2>
            <p>You want to write and share your ideas or information you are on the right platform. But why you choose reading and writing articles;</p>
            <p>Online, there are many ways to transfer ideas and information among others like Forums, Discussion groups, Videos, Social Media posts etc. but reading and writing webstories is a most prefered way to consume the information in a fast way. There are lots of benefits associated with reading and writing. It expand your knowledge and understanding, improve communication skills, enhnace your creativity, boost your critical thinking, sync you with updates and technologies.</p>
            <div class="alert alert-success" role="alert">
              You will be able to <b>earn money</b> by writing articles when it is enabled on our platform. We will let you know when it is enabled.
            </div>
        </div>
      </div>

    </div>
  </body>
  <script type="text/javascript">
    const container = document.querySelector('.headMenus');

    const content = document.getElementById('guideMenu');
    const containerWidth = container.clientWidth;
    const contentWidth = content.scrollWidth;
    const scrollLeftValue = (containerWidth - contentWidth) / 2;
    container.scrollLeft = scrollLeftValue;
  </script>
  <script src="/assets/js/policy.js" charset="utf-8"></script>
</html>
