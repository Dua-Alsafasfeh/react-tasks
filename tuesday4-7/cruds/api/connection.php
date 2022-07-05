<?php
header("Access-Control-Allow-Origin: *");
$server="localhost";
$dbusername="root";
$password="";
$database="reactcrud";

$con=mysqli_connect($server,$dbusername,$password,$database);

if(!$con){
    die("connection failed: ".mysqli_connect_error());
}
?>