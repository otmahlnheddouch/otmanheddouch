<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['subject'];
$to = "otmanheddouchai@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@otmanheddouch.herokuapp.com."\r\n";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:home.html");
?>
