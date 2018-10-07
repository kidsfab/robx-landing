<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET");
header('Content-Type: application/json');

// $fields = array();
// function parseQuery($query)
// {
//     foreach (explode('&', $query) as $q)
//     {
//         $q = explode('=', $q, 2);
//         if ('' === $q[0]) continue;
//         $q = array_map('urldecode', $q);
//         $fields[$q[0]][] = isset($q[1]) ? $q[1] : '';
//     }
//     return $fields;
// }
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>VK lead</title>
</head>
<body style="background-color: #000000; color: #00FF00; font-family: monospace ; padding: 0 10px;">
  Request was
<pre>
<?php echo $_GET; ?>
</pre>
</body>
</html>
