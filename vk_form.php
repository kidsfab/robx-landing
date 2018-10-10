

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

    default:
        file_put_contents('result.txt', json_encode($data), FILE_APPEND);
        break;

}
?>
