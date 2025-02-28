<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/products', [ProductController::class, 'getProducts']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);

Route::post('/cart', [CartController::class, 'updateCart']);
Route::get('/cart', [CartController::class, 'getCart']);
Route::delete('/cart', [CartController::class, 'clearCart']);
