<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\TeacherAccountController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

if (! function_exists('normalizePrototypeCommerceToUsd')) {
    function normalizePrototypeCommerceToUsd(array $data): array
    {
        $standardUsdPackagePrices = [
            'Adults' => [
                '15' => '165',
                '30' => '314',
                '45' => '456',
            ],
            'Kids' => [
                '15' => '90',
                '30' => '171',
                '45' => '249',
            ],
        ];

        $legacyLocalPackagePrices = [
            'south korea' => [
                'Adults' => ['15' => '229000', '30' => '436000', '45' => '634000'],
                'Kids' => ['15' => '125000', '30' => '238000', '45' => '346000'],
            ],
            'japan' => [
                'Adults' => ['15' => '24600', '30' => '46900', '45' => '68100'],
                'Kids' => ['15' => '13450', '30' => '25525', '45' => '37165'],
            ],
            'uae' => [
                'Adults' => ['15' => '605', '30' => '1153', '45' => '1675'],
                'Kids' => ['15' => '331', '30' => '628', '45' => '915'],
            ],
            'saudi arabia' => [
                'Adults' => ['15' => '620', '30' => '1178', '45' => '1710'],
                'Kids' => ['15' => '338', '30' => '641', '45' => '934'],
            ],
            'israel' => [
                'Adults' => ['15' => '610', '30' => '1160', '45' => '1685'],
                'Kids' => ['15' => '333', '30' => '632', '45' => '920'],
            ],
        ];

        if (isset($data['serviceCountries']) && is_array($data['serviceCountries'])) {
            $data['serviceCountries'] = array_map(function ($country) {
                if (is_array($country)) {
                    $country['currency'] = 'USD';
                }

                return $country;
            }, $data['serviceCountries']);
        }

        if (isset($data['packages']) && is_array($data['packages'])) {
            $data['packages'] = array_map(function ($package) use ($standardUsdPackagePrices, $legacyLocalPackagePrices) {
                if (! is_array($package)) {
                    return $package;
                }

                $market = strtolower((string) ($package['market'] ?? ''));
                $market = $market === 'united arab emirates' ? 'uae' : $market;
                $audience = (string) ($package['audience'] ?? '');
                $lessons = (string) ($package['lessons'] ?? '');
                $legacyPrice = $legacyLocalPackagePrices[$market][$audience][$lessons] ?? null;
                $standardPrice = $standardUsdPackagePrices[$audience][$lessons] ?? null;
                $currentPrice = str_replace(',', '', (string) ($package['price'] ?? ''));

                if ($legacyPrice && $standardPrice && $currentPrice === $legacyPrice) {
                    $package['price'] = $standardPrice;
                }

                return $package;
            }, $data['packages']);
        }

        return $data;
    }
}

if (! function_exists('loadPrototypeCommerceData')) {
    function loadPrototypeCommerceData(): array
    {
        $storedPath = storage_path('app/prototype-commerce.json');
        $defaultPath = public_path('speakryt-commerce.json');
        $path = is_file($storedPath) ? $storedPath : $defaultPath;
        $data = is_file($path) ? json_decode((string) file_get_contents($path), true) : [];

        return normalizePrototypeCommerceToUsd(is_array($data) ? $data : []);
    }
}

if (! function_exists('prototypeCommerceJsonResponse')) {
    function prototypeCommerceJsonResponse()
    {
        return response()
            ->json(loadPrototypeCommerceData())
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    }
}

if (! function_exists('prototypeCommerceOptionsResponse')) {
    function prototypeCommerceOptionsResponse()
    {
        return response('', 204)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    }
}

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
Route::get('/api/public/commerce', function () {
    return prototypeCommerceJsonResponse();
})->name('api.public.commerce.index');
Route::options('/api/public/commerce', function () {
    return prototypeCommerceOptionsResponse();
});
Route::get('/prototype/commerce', function () {
    return prototypeCommerceJsonResponse();
})->name('prototype.commerce.index');
Route::options('/prototype/commerce', function () {
    return prototypeCommerceOptionsResponse();
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
    $data = normalizePrototypeCommerceToUsd($data);

    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT));

    return response()->json(['saved' => true]);
})->middleware('auth')->name('prototype.commerce.store');
Route::post('/generate', [HomeController::class, 'generate'])->name('generate');
