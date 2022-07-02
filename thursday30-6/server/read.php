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
$sql = "select * from user";
$result = mysqli_query($con,$sql);
if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
for ($i=0; $i < mysqli_num_rows($result); $i++) { 
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result),JSON_PRETTY_PRINT);
}
?>