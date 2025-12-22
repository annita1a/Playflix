<?php
session_start();
if (!isset($_SESSION['login'])) {
    header("Location: form_login.php");
    exit();
}
?>
<!doctype html>
<html lang="en" data-bs-theme="dark">

<head>
    <?php include('component/head.php') ?>
</head>

<body class=" custom-header-relative ">
    <span class="screen-darken"></span>
    <!-- loader Start -->
    <!-- loader Start -->
    <div class="loader simple-loader">
        <div class="loader-body">
            <img src="./assets/images/loader.gif" alt="loader" class="img-fluid " width="300">
        </div>
    </div>
    <!-- loader END --> <!-- loader END -->
    <main class="main-content">
        <!--Nav Start-->
        <?php include('component/header.php') ?>
        <!--Nav End-->

        <!--bread-crumb-->
        <!--bread-crumb-->

        <?php
		if (!isset($_REQUEST['page'])) {
			$_REQUEST['page'] = 'home';
		}

		include("pages/" . $_REQUEST['page'] . ".php");
		?>

    </main>


  
<?php include('component/footer.php') ?>
    <div id="back-to-top" class="back-to-top" style="display: none;">
        <a class="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" id="top" href="#top">
            <i class="ph ph-caret-up fw-bold"></i>
        </a>
    </div> <!-- Wrapper End-->
    <?php include('component/script.php') ?>
</body>

</html>

<?php 
unset($_SESSION['alert']);
?>