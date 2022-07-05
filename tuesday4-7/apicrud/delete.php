<?php

include_once './connection.php';

$id = $_REQUEST['id'];

echo $sql = "DELETE FROM `user` WHERE `id`='$id'";

$result=$conn->query($sql);

$conn->close();
?>
