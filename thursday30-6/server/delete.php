<?php
header("Access-Control-Allow-Origin: *");

$server="localhost";
$dbusername="root";
$password="";
$database="react-api";

$con=mysqli_connect($server,$dbusername,$password,$database);

if(!$con){
    die("connection feild: ".mysqli_connect_error());
}



$id=$_REQUEST["id"];

$sql = "delete from user where id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>