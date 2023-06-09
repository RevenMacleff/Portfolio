<?php



$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$token = "5817376987:AAHAFgv9EvDwjTPktCHmksq9qI3Gp4YONDs";
$chat_id = "-902508851";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,
  'TEXT' => $text
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

/* if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
 */