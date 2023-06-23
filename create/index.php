<?php
$_SERVROOT = '../../';
$_DOCROOT = $_SERVER['DOCUMENT_ROOT'];
include "../.ht/controller/VISIT.php";

$createContent = new createContent();

class createContent{
    public $version;
    public $captureVisit;
    public $userData;
    protected $DB_CONN;
    protected $AUTH;
    protected $FUNC;
    public $uploadData;
   function __construct() {
        // Create an instance to create/save activity
        $this->captureVisit = new VisitorActivity();
        $this->FUNC = new BasicFunctions();
        // Get css,js version from captureVisit
        $this->version = $this->captureVisit->VERSION;
        $this->version = implode('.', str_split($this->version, 1));
        $this->userData = new getLoggedData();
        $this->uploadData = new getUploadData();
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Cache-Control" content="public, max-age=3600">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="MD. Shafiq Malik">
    <title></title>
    <!-- Gobal CSS -->
    <link rel="shortcut icon" href="/favicon.ico"> 
    <link href="style.css?v=<?php $v = new createContent(); echo $v->version; ?>" rel="stylesheet">
    <link href="/assets/fontawesome/css/fontawesome.min.css" rel="stylesheet">
    <link href="/assets/fontawesome/css/brands.min.css" rel="stylesheet">
    <link href="/assets/fontawesome/css/solid.min.css" rel="stylesheet">
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <script>
        var uploads = {};
    <?php
        $id = $createContent->userData->getSelfDetails()['UID'];
        $username = $createContent->userData->getSelfDetails()['username'];
        $data = $createContent->uploadData->getAllData($id);
        $data = array_reverse($data);
        $length = count($data);
        for($i=0;$i < $length; $i++ ){
            $idn = $i+1;
            $self = '';
            $everyone = '';
            $followers = '';
            $self = '';
            if($data[$i][8] == 'followers'){
            $followers = 'selected';
            }elseif($data[$i][8] == 'everyone'){
            $everyone = 'selected';
            }elseif($data[$i][8] == 'self'){
                $self = 'selected';
            }
            
            $whatToShow;
            $onclick;
            $what = '';
            if($data[$i][6] == 'photos'){
                $path = '/uploads/photos/'.$username.'/'.$data[$i][2].$data[$i][7];
                $what = 'image';
                $icon = 'image';
            }elseif($data[$i][6] == 'videos'){
                $path = '/uploads/videos/'.$username.'/'.$data[$i][2].$data[$i][7];
                $what = 'video';
                $icon = 'film';
            }
            echo 'uploads.up'.$i.' = '.'{};';
            echo "\n";
            echo 'uploads.up'.$i.'.link = "'.$path.'";';
            echo "\n";
            echo 'uploads.up'.$i.'.type = "'.$data[$i][6].'";';
            echo "\n";
        }
    ?>
    
                    
</script>
</head>
<body>
    <div class="editContainer">
        <!-- Left Section -->
        <div class="sections leftSection" id="leftSection">
            <div class="uploadsDiv" id="uploadDiv">
                <div class="uploadHead">
                    <div class="uploadsTitle">Media Library</div>
                    <div class="lefthideMe" id="lefthideMe" onclick="hideSection('leftSection')">
                        <i class="fa-solid fa-x whatIcon"></i>
                    </div>
                </div>
                <div class="uploads" id="uploads">
                
                    <!-- Uploads will be set here -->
                </div>
                
            </div>
        </div>
        <div class="hideShow hideShowLeft" id="hsLeft">
            <i class="fa-solid fa-arrow-up-from-bracket whatIcon" onclick="showSection('leftSection', 'lefthideMe')"></i>

        </div>
        <!-- Left Section -->

        <!-- Editor Section -->
        <div class="sections editorSection">
            <div class="editorBox" id="editTab">
            </div>
            <div class="editorNav">
                <div class="navs backArrow" onclick="layers.moveBackward()"> <i class="fa-sharp fa-solid fa-angle-left"></i> </div>
                <div class="navs minus" id="minusIcon" onclick="layers.deleteLayer()"><i class="fa fa-minus"></i></div>
                <div class="navs deleteAdd" id="deleteMedia"><i class="fa-regular fa-trash fa-2x"></i></div>
                <div class="navs frontPlus" id="plusIcon" onclick="layers.createNewLayer()" ><i class="fa fa-plus"></i></div>
                <div class="navs frontArrow" onclick="layers.moveForward()"><i class="fa-sharp fa-solid fa-angle-right"></i></div>
            </div>
        </div>
        <!-- Editor Section -->

        <!-- Right Section -->
        <div class="hideShow hideShowRight" id="hsRight" onclick="showSection('rightSection', 'righthideMe')">
            <i class="fa-solid fa-bars whatIcon"></i>
        </div>
        <div class="sections rightSection" id="rightSection">
            <div class="rightDiv">
                <div class="rightHead">
                    
                    <div class="righthideMe" id="righthideMe" onclick="hideSection('rightSection')">
                        <i class="fa-solid fa-x whatIcon"></i>
                    </div>
                    <div class="buttonsDiv">
                        <div class="buttons">Draft</div>
                        <div class="buttons">Save</div>
                        <div class="buttons">Publish</div>
                    </div>
                </div>
            </div>
           

        </div>
        <!-- Right Section -->
       
    </div>
</body>
<script src="layers.js?v=<?php $v = new createContent(); echo $v->version; ?>"></script>
<script src="function.js?v=<?php $v = new createContent(); echo $v->version; ?>"></script>
</html>