<?php
$to = 'otmanheddouchai@gmial.com'
$subject = 'Mail From Website'
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
mail(
  string $to,
  string $subject,
  string $message,
): bool
header("Location:home.html");
?>
