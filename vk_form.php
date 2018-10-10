<?php
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
        $first_name = NIL;
        $phone_number = NIL;
        foreach ($data->object->answers as $el){
            if($el->key == 'first_name'){
                $first_name = $el->answer;
            }
            if($el->key == 'phone_number'){
                $phone_number = $el->answer;
            }
            if($first_name and $phone_number){
                // отправляем данные. Пока заглушка
                file_put_contents('result.txt', '$first_name $phone_number', FILE_APPEND);
                
                echo 'ok';
                break;
            }
        }
        break;
}
?>
