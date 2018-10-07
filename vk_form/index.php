<?php

use VK\CallbackApi\Server\VKCallbackApiServerHandler;

class ServerHandler extends VKCallbackApiServerHandler {
    const SECRET = getenv('VKSK');
    const GROUP_ID = 69501379;
    const CONFIRMATION_TOKEN = 'e7e13fe2';

function confirmation(int $group_id, ?string $secret) {
        if ($secret === static::MY_SECRET && $group_id === static::GROUP_ID) {
            echo static::CONFIRMATION_TOKEN;
        }
    }

public function messageNew(int $group_id, ?string $secret, array $object) {
        echo 'ok';
    }
}

$handler = new ServerHandler();
$data = json_decode(file_get_contents('php://input'));
$handler->parse($data);

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
