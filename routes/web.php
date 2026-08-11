<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\TeacherAccountController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/website', [HomeController::class, 'website'])->name('website');
Route::get('/speakryt', [HomeController::class, 'website'])->name('speakryt.website');
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
Route::get('/prototype/commerce', function () {
    $storedPath = storage_path('app/prototype-commerce.json');
    $defaultPath = public_path('speakryt-commerce.json');
    $path = is_file($storedPath) ? $storedPath : $defaultPath;
    $data = is_file($path) ? json_decode((string) file_get_contents($path), true) : [];

    return response()
        ->json($data)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Accept');
})->name('prototype.commerce.index');
Route::options('/prototype/commerce', function () {
    return response('', 204)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Accept');
});
Route::post('/prototype/commerce', function (Request $request) {
    $path = storage_path('app/prototype-commerce.json');
    $directory = dirname($path);

    if (! is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    $data = $request->validate([
        'serviceCountries' => ['array'],
        'packages' => ['array'],
        'coupons' => ['array'],
        'couponUsage' => ['array'],
        'studentPayments' => ['array'],
    ]);

    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT));

    return response()->json(['saved' => true]);
})->middleware('auth')->name('prototype.commerce.store');
Route::post('/generate', [HomeController::class, 'generate'])->name('generate');
