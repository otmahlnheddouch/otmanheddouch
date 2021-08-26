<?php     
$to_email = 'portfoliootman@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: ';
mail($to_email,$subject,$message,$headers);
?>