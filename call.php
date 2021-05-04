<?php
include "./dati.php";

header('Content-Type: application/json');

  if ($_GET["author"]) {
    $author = $_GET["author"];
    $filteredDischi = [];
     foreach ($dischi as $value) {
      if (stripos($value["author"], $author) !== false){
        $filteredDischi[] = $value;
      }
    }
      echo json_encode($filteredDischi); 
  } else {
    echo json_encode($dischi);
  }
?>