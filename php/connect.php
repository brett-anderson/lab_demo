<?php
  define('DB_HOST','localhost');
  define('DB_USER','root');
  define('DB_PASS','ace952');
  define('DB_NAME','lab');        

  // Create a MySQLi resource object called $db.
  $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME); 
 
  // If an error occurs we can look here for more info:
  $connection_error = mysqli_connect_errno();
  $connection_error_message = mysqli_connect_error();
?>