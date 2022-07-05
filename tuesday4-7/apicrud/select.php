<!-- <?php 
include_once "./db_connection.php";
?>


<?php
$sql="select * from users";
$arr =  array () ;


$result  = $conn->query($sql);

if ($result->num_rows > 0) {
  
    // output data of each row
    while($row = $result->fetch_assoc()) {

      $arr[]=$row  ;
      
    
    }
  } else {
    echo "0 results";
  }
 print_r (json_encode($arr)  );


  $conn->close();

?> -->