<?php

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $content_f = file_get_contents("blocked_users.txt");
    if ($content_f){
        $blocked = unserialize($content_f);
    } else {
        $blocked = array();
    }
    $time_block = 60*60*24; // Время на которое блокируется пользователь
    if (array_key_exists($_SERVER['REMOTE_ADDR'], $blocked) && time() - $blocked[$_SERVER['REMOTE_ADDR']] < $time_block){
        unset($blocked[$_SERVER['REMOTE_ADDR']]);
	}

    if (!empty($_POST) && !( empty($_POST['u_name']) || empty($_POST['phone']) ) )
    {

        $blocked[ $_SERVER['REMOTE_ADDR'] ] = time();

	    $url = 'https://docs.google.com/forms/d/e/1FAIpQLSc72sii9QQ7n0RB_2GKgc_al5K80wzEQGRV124iXv4ErP0HEA/formResponse';

	    $options = array(
			'http' => array(
				'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
				'method'  => 'POST',
				'content' => http_build_query(array(
					'entry_598421956' => $_POST['u_name'],
					'entry_706895143' => $_POST['phone'],
					'entry_30508999' => $_POST['date'],
				))
			)
		);
		$context  = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		if ($result === FALSE) {
			var_dump(http_response_code(500));
		}

		$data = array(
			'first_name' => $_POST['u_name'],
			'phone_mobile' => $_POST['phone'],
			'type_client_c' => 'ЛИД',
      "source" => "site",
      "utm_source" => $_POST['utm_source'],
      "utm_medium" => $_POST['utm_medium'],
      "utm_campaign" => $_POST['utm_campaign'],
		);

		include_once("tallanto.php");
		$resultAccount = senderToTallanto('Contact',$data);

		 echo "<script>console.log('senderToTallanto', " .  $resultAccount  .   " );</script>";
	}
	else{
		echo "<script>alert( 'Ваши данные не были отправлены, позвоните по телефону 9398748 чтобы подтвердить запись.' );</script>";
	}
	file_put_contents("blocked_users.txt", serialize($blocked));
}

?>


<a name = "register"></a>
<div class = "register">
    <div>
        <div class = "block">
    		<div class = "intro">
    			<div>
    				Запись на первое бесплатное занятие в Кружке Робототехники!
    			</div>
    			<div class = "information">
    				<div class = "next">
                        <div>
                            Ближайшие занятия:
                        </div>
    					<div>
    						11 - 17 ноября
    					</div>
    				</div>
    				<div class = "rest">
    					До занятия осталось:
    					<div>
    						-
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class = "form">
    			<form action="https://robx.org/" target="_self" method='post' onsubmit="fbq('track', 'Lead'); ga('send', 'event', 'form', 'submit'); yaCounter39897755.reachGoal('ORDER');">
    				<div class = 'entry required'>
    					<input name = 'u_name' type = 'text' placeholder="Как к Вам обращаться?" required>
    				</div>
    				<div class = 'entry required mobile-phone'>
    					<input name = 'phone' type = 'text'placeholder="Контактный телефон" pattern='\+7 \([0-9]{3}\) [0-9]{7}' required>
    				</div>
            		<div class="g-recaptcha" data-sitekey="6LdXMB0UAAAAAMM0MEAPJwJsCKYyqTUJnUT_aFuE" style="display: none"></div>
            <input type="hidden" name="utm_source" value="<?php echo_if_isset($_GET['utm_source'])?>">
            <input type="hidden" name="utm_medium" value="<?php echo_if_isset($_GET['utm_medium'])?>">
            <input type="hidden" name="utm_campaign" value="<?php echo_if_isset($_GET['utm_campaign'])?>">
            <input type='submit' name='submit' class='submit'  value = 'Записаться' >
    			</form>
    			<div class = 'notification'>
    				Спасибо! С Вами свяжется наш сотрудник для подтверждения времени.
    			</div>
    		</div>
            <div class = "footnote">
		        <div>
                    Мы уважаем вашу конфиденциальность, введенная в форму информация не будет передаваться третьим лицам.
                </div>
            </div>
        </div>
    </div>
    <div class = "background-images">
        <img src = "photos/registration-photo-2.jpg"/>
        <img src = "photos/registration-photo-1.jpg"/>
        <img src = "photos/registration-photo-3.jpg"/>
        <img src = "photos/registration-photo-4.jpg"/>
    </div>
</div>
