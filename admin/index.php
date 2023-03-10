<?php
$_SERVROOT = '../../';
$_DOCROOT = $_SERVER['DOCUMENT_ROOT'];
include $_DOCROOT."/.htactivity/VISIT.php";
$visit = new VisitorActivity();
$version = $visit->VERSION;
$GLOBALS['DB'] = $_SERVROOT.'/secrets/DB_CONNECT.php';

include_once($GLOBALS['DB']);
if(!isset($_COOKIE['AID'])){
	header('Location: /accounts/index.php');
}

?>

<!DOCTYPE html> 
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->  
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="unititled">
	<meta name="keywords" content="Fastreed - Admin Panel">
	<meta name="author" content="Audain Designs">
	<link rel="shortcut icon" href="favicon.ico">  
	<title>Fastreed - Admin Panel</title>

	<!-- Gobal CSS -->
	<link href="/assets/css/bootstrap.min.css" rel="stylesheet">
	
	<!-- Template CSS -->
	<link href="/assets/css/style.css?V=<?php echo $version;?>" rel="stylesheet">
	<link href="/assets/css/page.css?V=<?php echo $version;?>" rel="stylesheet">
	<link href="/admin/style.css?V=<?php echo $version;?>" rel="stylesheet">
	<!--Fonts-->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
	<style>
		.main-block{
			height: 100%;
		}
		.side-block{
			height: 100%;
		}
	</style>
</head>
<body class="style-7">
<!--main content-->
<div class="main-content">
	<div class="container">
		<div class="row">

			<div class="content col-12">
				<div id="header-section" class="section-block">
				        <div class="brand">
							<i id="bars" class="t-icon fa fa-bars fa-lg"></i>
							<h1> <a href="/">FastReed.com</a> </h1>
						</div>
					<!--tabs-->
					<div class="head-tabs">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation"  class="active" ><a>Dashboard</a></li>
							<li role="presentation"><a  href="activity">Activty</a></li>
							<li role="presentation"><a href="refresh.php">Refresh</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="content sidebar page-col col-lg-2 col-md-12 col-sm-12 col-xs-12">
			        <div class="section-block sidebar-block">
					    <p id="sidebarPosition" hidden>0</p>
						<i id="close-bars" class=" t-icon fa-solid fa-arrow-left fa-lg"></i>	
						<?php
						include '../views/sidebar.php';
						echo $profileTab;
						$t = $p_Data->TYPE;
						echo $$t;
						?>				
					</div>
			</div>

			<div class="content col-lg-7 col-md-12 col-sm-12 col-xs-12">
				<div class="section-block main-block">
					<div class="section-title" id="1">All Devices</div>
				</div>	
			</div>
			<div class="content col-12 order-3 footer">
					<div class="section-block footer-section"></div>
				</div>
		</div>
	</div>
</div>

<!-- Global jQuery -->
<script type="text/javascript" src="/assets/js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>

<!-- Template JS -->
<script type="text/javascript" src="/assets/js/main.js?v=<?php echo $version;?>"></script>
<script type="text/javascript" src="/assets/js/page.js?=<?php echo $version;?>"></script>
</body>
</html>
