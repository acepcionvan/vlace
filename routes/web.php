<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\TeacherAccountController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/login', [AuthController::class, 'login'])->middleware('guest')->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');
Route::get('/setup/{key}', SetupController::class)->name('setup');
Route::get('/admin/create-teacher-login', TeacherAccountController::class)->middleware('auth')->name('teacher-login.setup');
Route::post('/admin/users', [AdminUserController::class, 'store'])->middleware('auth')->name('admin.users.store');
Route::post('/admin/users/password', [AdminUserController::class, 'password'])->middleware('auth')->name('admin.users.password');
Route::get('/prototype/payroll-deductions', function () {
    $path = storage_path('app/prototype-payroll-deductions.json');

    return response()->json(is_file($path) ? json_decode((string) file_get_contents($path), true) : []);
})->middleware('auth')->name('prototype.payroll-deductions.index');
Route::post('/prototype/payroll-deductions', function (Request $request) {
    $path = storage_path('app/prototype-payroll-deductions.json');
    $directory = dirname($path);

    if (! is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    file_put_contents($path, json_encode($request->input('deductions', []), JSON_PRETTY_PRINT));

    return response()->json(['saved' => true]);
})->middleware('auth')->name('prototype.payroll-deductions.store');
Route::post('/generate', [HomeController::class, 'generate'])->name('generate');
