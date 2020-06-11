<?php

/* https://api.telegram.org/bot1202298984:AAGZa5xx-aSzgvodFlUPtOelNYNwc_boUu8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  $userName = $_POST["userName"];
  $userPhone = $_POST["userPhone"];
  $userEmail = $_POST["userEmail"];

  $userEmailsender = $_POST["userEmailsender"];

  $type = $_POST["type"];
  $Policy = $_POST["Policy"];

$token = "1202298984:AAGZa5xx-aSzgvodFlUPtOelNYNwc_boUu8";
$chat_id = "-497018436";
$arr = array(
  'Имя пользователя: ' => $userName,
  'Телефон: ' => $userPhone,
  'Email:' => $userEmail,
  'Тариф:' => $type,
  'Политика:' => $Policy,
  'Email Рассылка:' => $userEmailsender
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo('Thank You!');
} else {
  echo "Error";
}
?>