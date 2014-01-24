<?
  require 'connect.php';
  $name       = $_POST['name'];
  $height     = $_POST['height'];

    // Fetches table from DB
  $query = "INSERT INTO students (name, height) VALUES (\"{$name}\", \"{$height}\")";
  $result = $db->query($query);

?>