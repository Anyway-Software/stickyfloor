<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/test-db', function () {
    // try {
    //     \DB::connection()->getPdo();
    //     return "Connected successfully!";
    // } catch (\Exception $e) {
    //     return "Could not connect to the database. Please check your configuration. error:" . $e->getMessage();
    // }

    // get a user
    $u = App\Models\User::find(1);

    return json_decode($u);
});

Route::post('/login', [AuthController::class, 'login']);

Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);

Route::view('/{any?}', 'app')
    ->where('any', '.*');
