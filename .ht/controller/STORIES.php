<?php
class getStoriesData{
    private $DB;
    function __construct(){
        $DB_CONNECT = new Database();
        $this->DB = $DB_CONNECT->DBConnection();
    }

    public function getAllData($id){
        $return = array();
        $sql = "SELECT * FROM stories WHERE personID = '$id'";
        $result = mysqli_query($this->DB, $sql);
        if ($result) {
            $rowCount = mysqli_num_rows($result);
            if ($rowCount) {
                $row = mysqli_fetch_all($result);
                $return = $row;
            }
        }
        $this->closeConnection();
        return $return;
    }
    public function closeConnection()
    {
        if ($this->DB) {
            mysqli_close($this->DB);
            $this->DB = null; // Set the connection property to null after closing
        }
    }
}
?>