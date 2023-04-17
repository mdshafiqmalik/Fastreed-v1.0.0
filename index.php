<?php
$_SERVROOT = '../';
$_DOCROOT = $_SERVER['DOCUMENT_ROOT'];
include ".htactivity/VISIT.php";
$visit = new VisitorActivity();
$version = $visit->VERSION;
$version = implode('.', str_split($version, 1));
?>

<!DOCTYPE html> 
<html lang="en">  
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="unititled">
	<meta name="keywords" content="HTML5 Crowdfunding Profile Template">
	<meta name="author" content="Audain Designs">
	<link rel="shortcut icon" href="favicon.ico">  
	<title>Fastreed - Read, Write and Share Greate Ideas and Stories</title>

	<!-- Gobal CSS -->
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/css/homepage.css?v=<?php echo $version;?>" rel="stylesheet">
	<!--Fonts-->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>

	<script src="https://accounts.google.com/gsi/client" async defer></script>
</head>
<body>
	<div class="option-overlay" onclick="removeOptions()" id="opt-overlay"></div>
	<header>
		<div class="brand"><h1><a href="">Fastreed</a></h1></div>
		<div class="rightside">
			<div class="nav">
				<i class="fa fa-regular fa-circle-user fa-xl" onclick="toggleAccounts()"></i>
				<i class="fa fa-gear fa-xl" onclick="toggleSetting()"></i>
				<i class="fa fa-ellipsis-v fa-xl" onclick="toggleOptions()"></i>
			</div>
		</div>
		
	</header>
	<!--main content-->
	
	
	<div class="main-content">
		<div class="container">
			<div class="row ">

		
				<!-- Right Main Bar -->
				<div id="center-block" class="content col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div class="options" id="s-options" style="display:none">
						<div class="menu-head">
						    <span class="name">Options</span>
						</div>
						<div class="menus"><i class="left fa fa-table-list"></i>Reading List</div>
						<div class="menus"><i class="left fa fa-message"></i>Feedback</div>
						<div class="menus"> <i class="left fa fa-info-circle"></i>About Fastreed</div>
						<div class="menus"><i class="left fa fa-file-circle-check"></i>Terms and Privacy</div>
					</div>

					<div class="settings" id="settings" style="display:none">
					    <div class="menu-head">
						    <span class="name">Settings</span>
						</div>
						
						<div class="menus" onclick="toggleMode()"> <i class="left fa fa-circle-half-stroke"></i>Dark Mode <i class="right fa fa-solid fa-toggle-on fa-lg"  id="toggleMode"></i></div>
						<div class="menus"><i class="left fa fa-icons"></i>Manage Interests</div>
					</div>

					<div class="accounts" id="accounts" style="display:none">
					    <div class="menu-head">
						    <span class="name">Accounts</span>
						</div>

						<!-- <div class="continueEmail"> -->
							<a class="continueEmail" href=""> <i class="left fa fa-envelope"></i> Continue with email</a>
						<!-- </div> -->

						<div id="g_id_onload"
							data-client_id="878548651441-q7db04pmge7g6vlcieepnr21j9mkj2iu.apps.googleusercontent.com"
							data-context="signup"
							data-ux_mode="popup"
							data-login_uri="<?php URL  ?>/"
							data-nonce=""
							data-auto_prompt="false">
						</div>

						<div class="g_id_signin"
							data-type="standard"
							data-shape="pill"
							data-theme="filled_black"
							data-text="continue_with"
							data-size="large"
							data-logo_alignment="left">
						</div>
					</div>

				    <div class="pin_container">
					
						<!-- 01 -->
						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port1.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
										<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 02 -->
						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb2.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>

							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 03 -->
						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port2.jpg');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 04 -->
						<div class="f-card f-card_medium">
							<div class="image" style="background-image:url('assets/img/port4.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 05 -->
						
						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port3.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						
						<!-- 06 -->
						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb2.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 07-->
						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb3.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!-- 08 -->
						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port5.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<!--09  -->
						<div class="f-card f-card_medium">
							<div class="image" style="background-image:url('assets/img/port6.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb4.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port7.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb5.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port8.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_medium">
							<div class="image" style="background-image:url('assets/img/port9.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port10.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb6.avif');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>

						<div class="f-card f-card_large">
							<div class="image" style="background-image:url('assets/img/port11.png');">
								<a href="#">
									<div class="overlay">
										<div class="top-overlay"> <div class="st-logo"></div> </div>
										<div class="title"> 
											<p> This is the dummy text for this website for testing</p>
										</div>
									</div>
								</a>
							</div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
						<div class="f-card f-card_small">
							<div class="image" style="background-image:url('/assets/img/thumb2.png');">
								<a href="">
									<div class="overlay"></div>
								</a>
							</div>
							<div class="title"> <a href="#">This is the dummy text used for testing this website design and for other purposes also</a></div>
							<div class="meta">
								<span class="cat"> <a href="">Technology</a> </span>
								<span class="date">2h</span>
								<a href=""><i class="fa fa-ellipsis-v"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
<!-- Global jQuery -->
<script type="text/javascript" src="/assets/js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script src="/assets/js/fun.js"></script>

</body>
</html>
