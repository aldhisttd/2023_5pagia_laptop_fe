<?php 

if(!isset($_GET['page'])){
    header('location:index.php?page=dashboard');
}


include $_REQUEST['page'].".php";
?>