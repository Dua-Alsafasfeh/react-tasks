<?php 
header("Access-Control-Allow-Origin: *");

$server = "localhost";
$dbusername = "root";
$password = "";
$database = "react-api";

$con = mysqli_connect($server,$dbusername,$password,$database);

if(!$con){
    die("connection field: ".mysqli_connect_error());
}
$id = $_REQUEST['id'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$age = $_REQUEST['age'];

$sql = "UPDATE user SET name='$name' email='$email' age='$age' WHERE id='$id'";
?>
