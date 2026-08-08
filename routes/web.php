<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\TeacherAccountController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/login', [AuthController::class, 'login'])->middleware('guest')->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');
Route::get('/setup/{key}', SetupController::class)->name('setup');
Route::get('/admin/create-teacher-login', TeacherAccountController::class)->middleware('auth')->name('teacher-login.setup');
Route::post('/generate', [HomeController::class, 'generate'])->name('generate');
