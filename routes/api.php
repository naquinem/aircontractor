<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/token', [AuthController::class, 'token']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/schedule', [AuthController::class, 'schedule']);
    Route::post('/customers', [CustomerController::class, 'store']);
});

Route::get('/review', [CustomerController::class, 'index']);
