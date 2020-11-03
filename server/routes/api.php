<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;

/**
 * Authentication
 */
Route::post('login',        [AuthController::class, 'login']);
Route::post('register',     [AuthController::class, 'register']);


/**
 * Categories
 */
Route::get('categories',    [CategoriesController::class, 'index']);