<?php
require 'main/tallanto.php';

if (!isset($_REQUEST)) {
    return;
}
//Строка для подтверждения адреса сервера из настроек Callback API
$confirmation_token = 'e7e13fe2';
//Получаем и декодируем уведомление
$data = json_decode(file_get_contents('php://input'));
//Проверяем, что находится в поле "type"
switch ($data->type) {
//Если это уведомление для подтверждения адреса...
    case 'confirmation':
        //...отправляем строку для подтверждения
        echo $confirmation_token;
        break;
    case 'lead_forms_new':
        if ($data->object->form_id != 1){break;}
        $first_name = NULL;
        $phone_number = NULL;
        foreach ($data->object->answers as $el){
            if($el->key == 'first_name'){
                $first_name = $el->answer;
            }
            if($el->key == 'phone_number'){
                $phone_number = $el->answer;
            }
            if($first_name and $phone_number){
                // отправляем данные.
                senderToTallanto('Contact', array("first_name" => $first_name, "phone_mobile" => $phone_number, "utm_medium" => "social",  "utm_source" => "VK", "LBL_CONTACT_SOURCE" => "VK Tagrget"));
                
                echo 'ok';
                break;
            }
        }
        break;
}
?>
