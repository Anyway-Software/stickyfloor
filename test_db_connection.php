
<?php

$dsn = 'pgsql:host=aws-0-ap-southeast-2.pooler.supabase.com;port=5432;dbname=postgres';
$username = 'postgres.zcprdmwfpptwtgagjiha';
$password = 'your-password';

try {
    $pdo = new PDO($dsn, $username, $password);
    echo "Connection successful!";
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
