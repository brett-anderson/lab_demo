<?
  require 'connect.php';
    // Fetches table from DB
  $query = "SELECT * FROM students";
  $result = $db->query($query);

  $data = array();

  while( $row = $result->fetch_assoc()) {
    array_push($data, $row);
  }
  echo json_encode($data);
?>