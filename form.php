
<?php
$subject = $_POST["subject"];
$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["message"];
$emial_body = "User name:$name.\n".
  "User  Email:$email.\n".
  "Subject : $subject.\n".
  "Message: $msg.\n";


mail("otmanheddouchai@gmail.com",$emial_body);
header("Location: home.html")
?>
