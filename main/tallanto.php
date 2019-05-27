<?php

function senderToTallanto($module, $params)
{
	file_put_contents("res.txt", $module, $params);
	$crm_url = 'http://robx.tallanto.ru';
	$url = $crm_url . '/index.php?entryPoint=dataCapture&module=' . $module;
	$key = getenv('TALLANTO'); //ваш сгенерированный ключ для подписи(его изменять не надо)
	uksort($params, "strcasecmp");
	$values = "";
	foreach($params as $name => $value) {
		if (is_array($value) && count($value) === 0) continue;
		if (is_array($value)) {
			$values.= 'Array'; //Элементы массива второй и более вложенностей в данном случае не играют важной роли и не участвуют в подписи
		}
		else {
			$values.= $value;
		}
	}

	$params['crc'] = md5($values . $key);
	$options = array(
		'http' => array(
			'header' => "Content-type: application/x-www-form-urlencoded\r\n",
			'method' => 'POST',
			'content' => http_build_query($params) ,
		) ,
	);
	

	try {
		$context = stream_context_create($options);
		$serverRes = file_get_contents($url, false, $context);
	
		// Здесь можно произвести обработку запроса

		$result = json_decode($serverRes, true);
		if (json_last_error()) {
			echo $serverRes;
		}
		elseif ($result['result'] == false) {
			echo "<script>alert( 'Возникла ошибка. Ваши данные не были отправлены, позвоните по телефону 9398748 чтобы подтвердить запись.' );</script>";
			echo $result['message'];
		} else {

		}
	} catch(Exception $e) {
		echo $e->getMessage();
	}

	return $result;
}

?>
