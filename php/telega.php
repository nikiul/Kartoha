<?php 
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $size = $_POST['size'];
        $result = true;

        if($name == '' || $phone == '' || $size == ''){
            $result = false;
        }

        if(!is_numeric($size)){
            $result = false;
        }

        $token = '2030932498:AAFtOsJb3feb0yGHo34TVFkMei8nr_0RtP8';     
        $recipient = '450872088';  

        $messege = "Новое сообщение. %0A Имя: $name %0A номер телефона: $phone %0A объем - $size кг."; 
        if($result != false){
            file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$recipient&text=$messege");
        }

        header('location: /');
    }   
?>