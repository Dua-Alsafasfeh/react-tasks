<?php
include_once "./connection.php";

$id = $_REQUEST['id'];

$sql="DELETE FROM users WHERE id='$id'";
mysqli_query($con,$sql);

?>