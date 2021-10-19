<?php

function send_mail($message)
{
    $subject = 'Заявка на регистрацию ПО';
    $headers = 'MIME-Version: 1.0';
    $headers .= 'Content-type: text/html; charset=utf-8';
    $headers .= 'From: MYSITE <no-reply@info.ru>';
    return mail('sofiya.kuznetsowa@gmail.com', $subject, $message, $headers);
}

if (($_POST['form_data_name'])) {
    $message .= 'Имя: ' . $_POST['form_data_name'] . '<br/>';
}
if (($_POST['form_data_email'])) {
    $message .= 'E-mail: ' . $_POST['form_data_email'] . '<br/>';
}
if (($_POST['form_data_tel'])) {
    $message .= 'Номер телефона: ' . $_POST['form_data_tel'] . '<br/>';
}
if (($_POST['form_data_po_name'])) {
    $message .= 'Название ПО: ' . $_POST['form_data_po_name'] . '<br/>';
}
if (($_POST['form_data_po_type'])) {
    $message .= 'Тип ПО: ' . $_POST['form_data_po_type'] . '<br/>';
}
if (($_POST['form_data_application_text'])) {
    $message .= 'Текст заявки: ' . $_POST['form_data_application_text'] . '<br/>';
}

$arResult['status'] = send_mail($message);
$arResult['message'] = $arResult['status'] ? 'Сообщение успешно отправлено!' : 'Что-то не так, попробуйте позже';


echo json_encode($arResult);