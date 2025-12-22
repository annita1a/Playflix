<?php 
session_start();

// Ambil data dari form
$username = trim($_POST['username'] ?? '');
$password = trim($_POST['password'] ?? '');

// Validasi input kosong
if ($username === '') {
    $_SESSION['error']['username'] = "Username tidak boleh kosong";
}
if ($password === '') {
    $_SESSION['error']['password'] = "Password tidak boleh kosong";
}

if (!empty($_SESSION['error'])) {
    header('Location: form_login.php');
    exit();
}

// Koneksi ke database
$koneksi = mysqli_connect('localhost', 'root', '', 'english');

// Cek koneksi
if (mysqli_connect_errno()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

// Cek apakah user ada di database
$sql = "SELECT * FROM login WHERE username = ?";
$stmt = mysqli_prepare($koneksi, $sql);
mysqli_stmt_bind_param($stmt, "s", $username);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

// Cek jumlah baris hasil
if (mysqli_num_rows($result) === 0) {
    $_SESSION['error']['login'] = "Data login tidak ditemukan";
    header('Location: form_login.php');
    exit();
}

// Ambil data user
$data = mysqli_fetch_assoc($result);
$passDB = $data['password'];

// Verifikasi password
if (!password_verify($password, $passDB)) {
    $_SESSION['error']['login'] = "Password salah";
    header('Location: form_login.php');
    exit();
}

// Set session
$_SESSION['login'] = true;
$_SESSION['username'] = $data['username'];
$_SESSION['role'] = $data['role'];

// Redirect ke dashboard
header('Location: dashboard.php');
exit();
