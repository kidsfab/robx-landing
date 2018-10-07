<?php

if (!isset($_REQUEST)) {
  return;
}

//Confirmation code from Callback API settings
$confirmation_token = 'e7e13fe2';

//Community access_token
$token = 'c0223f775444cf3d58a8a1442ec76a9571c8f58e3e24616d9440f73dc43022bbead9b2e576cb41d09c0a1';

//Receive and decode notification
$data = json_decode(file_get_contents('php://input'));

//Check the "type" field
switch ($data->type) {
  //If this is a confirmation message...
  case 'confirmation':
    //...send confirmation code
    echo $confirmation_token;
    break;

//If this is a new message...
  case 'message_new':
    //...get his author ID
    $user_id = $data->object->user_id;
    //then get user info via users.get method
    $user_info = json_decode(file_get_contents("https://api.vk.com/method/users.get?user_ids={$user_id}&v=5.0"));

//and get his name from the response
    $user_name = $user_info->response[0]->first_name;

//Send an answer with messages.send method and community access_token
    $request_params = array(
      'message' => "Hello, {$user_name}!",
      'user_id' => $user_id,
      // 'access_token' => $token, 
      'v' => '5.85'
    );

$get_params = http_build_query($request_params);

file_get_contents('https://api.vk.com/method/messages.send?'. $get_params);

//Your server should return the "ok" string as a response to each request.
echo('ok');

break;

}
?>
