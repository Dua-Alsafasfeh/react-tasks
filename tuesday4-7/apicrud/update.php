<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$age = $_REQUEST['age'];
$salary = $_REQUEST['salary'];

$sql = "UPDATE user SET name='$name', age='$age', email='$email', salary='$salary' WHERE id = '$id'";

mysqli_query($conn,$sql);

$conn->close();
?>
