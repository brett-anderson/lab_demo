<?
  require 'connect.php';

    // Fetches table from DB
  $query = "DELETE FROM students ORDER BY student_id DESC LIMIT 1";
  $result = $db->query($query);

?>