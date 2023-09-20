<?php
if(!isset($_SESSION)){session_start();}
$_SERVROOT = '../../../';
$_DOCROOT = $_SERVER['DOCUMENT_ROOT'];
include "../../.ht/controller/VISIT.php";
$VisitorActivity = new VisitorActivity();
$version = $VisitorActivity->VERSION;
$version = implode('.', str_split($version, 1));
$userData = new getLoggedData();
$adminLogged = $userData->adminLogged;
$userLogged = $userData->userLogged;
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../sign/style.css">
    <title></title>
  </head>
  <body>
    <div class="auth wrapper">
         <div class="title-text">
           <div class="title signup">Recover Forgotten Password</div>
         </div>
         <div class="form-container">
           <div class="form-inner">

             <!-- Log in -->
             <div class="form login">
               <div  class="otpMessage">Enter email address or Username to recover password</div>
               <div id="otpError" class="errorMessage"></div>
               <div class="field">
                 <input id="emailUsername" type="text" placeholder="Email or Username" required>
               </div>
               <div class="field btn">
                 <div class="btn-layer"></div>
                 <button id="confirmButton" class="submit" onclick="sendOTP()">Recover Password</button>
               </div>
             </div>

           </div>
         </div>
       </div>
  </body>
  <script src="function.js?v= <?php echo $version;?>"charset="utf-8"></script>
</html>
