<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketCategoryController;

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
});

    // Event routes
    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::get('events', [EventController::class, 'index']);
        Route::post('events', [EventController::class, 'store']);
        Route::get('events/{id}', [EventController::class, 'show']);
        Route::put('events/{id}', [EventController::class, 'update']);
        Route::delete('events/{id}', [EventController::class, 'destroy']);

        // Ticket Category routes
        Route::get('events/{eventId}/ticket-categories', [TicketCategoryController::class, 'index']);
        Route::put('events/{eventId}/ticket-categories', [TicketCategoryController::class, 'save']);
    });

Route::get('/health', function (Request $request) {
    return response()->json(['status' => 'API healthy ok! gfo!']);
});
