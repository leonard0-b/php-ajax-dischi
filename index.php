<?php 
include "./dati.php";

foreach ($dischi as $disc => $value) {
  echo "<h1>" . "Disco n." . ($disc + 1) . "</h1>";
  echo "<h3>" . $value["author"] . "</h3>";
  echo "<h4>" . $value["title"] . "</h4>";
  echo "<p>" . $value["year"] . "</p>";
  echo "<p>" . $value["genre"] . "</p>";
  echo $value["poster"];
  }
?>