
<?php
$subject = $_POST["subject"];
$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["message"];


mail("otmanheddouchai@gmail.com",$subject,$msg);
?>
