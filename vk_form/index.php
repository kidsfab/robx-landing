
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>VK lead</title>
</head>
<body style="background-color: #000000; color: #00FF00; font-family: monospace ; padding: 0 10px;">
    Response
<pre>
<?php
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);
printf ($decoded);

?>
</pre>
</body>
</html>
