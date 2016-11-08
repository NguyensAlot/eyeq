$errors = '';
$myEmail = 'info@eyeqpdx.com';

// error checking (empty fields)
if(empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['message'])) {
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone']
$message = $_POST['message'];

if(empty($errors)) {
    $to = $myEmail;
    $email_subject = "Appointment Request: $name";
    $email_body = "You have received a new message. ".
    "Here are the details:\n".
    "Name: $name \n Phone: $phone \n".
    "Email: $email_address\n Message \n\n $message";
    $headers = "From: $myEmail\n";
    $headers .= "Reply-To: $email_address";

    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    //header('Location: contact-form-thank-you.html');
}