<?php
session_start();
if(isset($_SESSION['islogin'])){
    header('location:dashboard.php');
    exit();
}
header('location:form_login.php');
?>