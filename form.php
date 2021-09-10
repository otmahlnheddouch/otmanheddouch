<?php
$subject = $_POST["subject"];
$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["message"];
$emial_body = "User name:$name.\n".
  "User  Email:$email.\n".
  "Subject : $subject.\n".
  "Message: $msg.\n";
$email_from = "portfoliotman@gmail.com";
$header = "From: $email_from \r\n";
$header .= "Reply-To:$email \r\n";


mail("otmanheddouchai@gmail.com","New form Submission",$emial_body,$header);
header("Location: home.html")
?>