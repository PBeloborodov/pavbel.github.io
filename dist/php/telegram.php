<?php

/* https://api.telegram.org/bot1241750869:AAFcqPLcTH6bOabF9YQcrJZ5xyBP2DLklAk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['form-name'];
$phone = $_POST['form-phone'];
$email = $_POST['form-mail'];
$massage = $_POST['form-massege'];
$token = "1241750869:AAFcqPLcTH6bOabF9YQcrJZ5xyBP2DLklAk";
$chat_id = "-419957226";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Massege' => $massage
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>