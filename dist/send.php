<?php

  $userName = $_POST["userName"];
  $userPhone = $_POST["userPhone"];
  $userEmail = $_POST["userEmail"];
  $userEmailsender = $_POST["userEmailsender"];

  $type = $_POST["type"];
  $Policy = $_POST["Policy"];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                  // Enable SMTP authentication
    $mail->Username   = 'serhiifiolow12345@gmail.com';                     // SMTP username
    $mail->Password   = 'Google12345';                               // SMTP password
    $mail->SMTPSecure = "ssl"; //ssl        // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465; //465                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('serhiifiolow12345@gmail.com', 'Repair-Design');
    $mail->addAddress('web.practice550@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New check-in from site';
    $mail->Body    = "User-Name: ${userName}, <br>
    User-Phone-Number: ${userPhone}, <br>
    His(Her) User-Email: ${userEmail}, <br> 
    User-Type: ${type}, <br>
    User-Email-Sender: ${userEmailsender}, <br>
    Approved the: ${Policy}, <br> ";

    if ($mail->send()) {
      echo "ok";
    } else {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
