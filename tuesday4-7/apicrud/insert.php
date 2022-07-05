<?php
include_once "./connection.php";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$age = $_REQUEST['age'];
$salary = $_REQUEST['salary'];



$sql = "INSERT INTO user(name, age, email, salary) VALUES('$name', '$age', '$email', '$salary')";

mysqli_query($conn,$sql);

$conn->close();
?>