

<?php
$rest_json = file_get_contents("php://input");
$data = json_decode($rest_json, true);

print_r($data);
?>
