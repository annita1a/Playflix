<?php
session_start();
if (!isset($_SESSION['login'])) {
    header("Location: form_login.php");
    exit();
}
?>

<!doctype html>
<html lang="en" data-bs-theme="dark" data-bs-theme-color="default" dir="ltr">

<head>
    <?php include('components/head.php') ?>
</head>

<body class="  ">
    <!-- loader Start -->
    <div id="loading">
        <div class="loader simple-loader">
            <div class="loader-body ">
                <img src="./dashboard/assets/images/loader.gif" alt="loader" class="image-loader img-fluid" />
            </div>
        </div>
    </div>
    <!-- loader END -->
    <aside class="sidebar sidebar-base sidebar-white sidebar-default navs-rounded-all " id="first-tour"
        data-toggle="main-sidebar" data-sidebar="responsive">
        <div class="sidebar-header d-flex align-items-center justify-content-start">
            <a href="./index.html" class="navbar-brand">

                <!--Logo start-->
                <img class="logo-normal" src="./dashboard/assets/images/logo.png" alt="#">
                <img class="logo-normal logo-white" src="./dashboard/assets/images/logo-white.png" alt="#">
                <img class="logo-full" src="./dashboard/assets/images/logo-full.png" alt="#">
                <img class="logo-full logo-full-white" src="./dashboard/assets/images/logo-full-white.png" alt="#">
                <!--logo End--> </a>
            <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
                <i class="chevron-right">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white">
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                    </svg>
                </i>
                <i class="chevron-left">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white" transform="rotate(180)">
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                    </svg>
                </i>
            </div>
        </div>

        <head>
            <?php include('components/sidebar.php') ?>
        </head>

        <div class="sidebar-footer"></div>
    </aside>
    <main class="main-content">
        <div class="position-relative ">
            <!--nav_start-->

            <head>
                <?php include('components/header.php') ?>
            </head>

        </div>

           <!-- konten -->
		<?php
		if (!isset($_REQUEST['page'])) {
			$_REQUEST['page'] = 'home';
		}

		include("pages/" . $_REQUEST['page'] . ".php");
		?>
		<!-- konten -->       

        <!-- Footer Section Start -->

        <?php include('components/footer.php') ?>

        <!-- Footer Section End -->
    </main>
    <!-- Wrapper End-->
    <!-- Live Customizer start -->
    <!-- Setting offcanvas start here -->
    <?php include('components/set.php') ?>

    <!-- Settings sidebar end here -->

    <?php include('components/script.php') ?>


</body>

</html>

<?php 
unset($_SESSION['alert']);
?>