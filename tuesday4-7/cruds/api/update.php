<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
$name = $_REQUEST["name"];
$email= $_REQUEST["email"];
$age= $_REQUEST["age"];

$sql="UPDATE users SET name='$name', email='$email', age='$age' WHERE id='$id' ";

mysqli_query($con,$sql);
?>
