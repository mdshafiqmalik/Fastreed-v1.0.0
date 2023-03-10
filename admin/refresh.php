<?php
$_SERVROOT = '../../';
$_DOCROOT = $_SERVER['DOCUMENT_ROOT'];
include $_DOCROOT."/.htactivity/VISIT.php";

if(!isset($_SESSION['LOGGED_ADMIN'])){
	header('Location: /accounts/index.php');
}

class HardRefresh extends VisitorActivity{	
	public function updateVersion(){
		$oldVersion = (int) $this->VERSION;
		$newVersion = $this->VERSION + 1;
		$newVersion = (string) $newVersion;
		$sql = "UPDATE options SET optionValue = '$newVersion' WHERE optionName = 'cssJsVersion'";
		$result = mysqli_query($this->DB, $sql);
		if ($result) {
			$vStatus = "Version Updated to : $newVersion";
		}else {
			$vStatus = "Version could not Updated";
		}
		return $vStatus;
	}
 }
$updateCode = shell_exec('git pull fastreed main');                      
$refresh = new HardRefresh();
$vStatus = $refresh->updateVersion();



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
	<link href="/assets/css/style.css?V=1.1.1" rel="stylesheet">
	<link href="/assets/css/page.css?V=1.1.4" rel="stylesheet">
	<link href="/admin/style.css?V=1.0.0" rel="stylesheet">
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
<body>
<!--main content-->
<div class="main-content">
	<div class="container">
		<div class="row">

			<div class="content col-12">
				<div id="header-section" class="section-block">
					<h1> <a href="/">FastReed.com</a> </h1>
					<!--tabs-->
					<div class="head-tabs">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation"><a href="/">Dashboard</a></li>
							<li role="presentation"><a  href="activity">Activty</a></li>
							<li role="presentation" class="active"><a>Refresh</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="content col-lg-8 col-md-12 col-sm-12 col-xs-12">
				<div class="section-block main-block">
					<span>
						<?php
						  echo $updateCode;
						  echo $vStatus;
						?>
                    </span>
				</div>	
			</div>
		</div>
	</div>
</div>
<footer class="footer">
<div class="container text-center">
		<div class="row copyright-row">
			<span class="copyright"><a href="/" target="_blank">@ Copyright www.Fastreed.com | 2023</a></span>
		</div>
	</div>
</footer>

<!-- Global jQuery -->
<script type="text/javascript" src="/assets/js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>

<!-- Template JS -->
<script type="text/javascript" src="/assets/js/main.js"></script>
<script type="text/javascript" src="/assets/js/page.js"></script>
</body>
</html>
