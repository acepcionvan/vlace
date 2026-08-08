<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SetupController extends Controller
{
    public function __invoke(string $key): Response
    {
        $setupKey = (string) config('vlace.setup_key');

        abort_unless($setupKey !== '' && hash_equals($setupKey, $key), 404);

        Artisan::call('migrate', ['--force' => true]);

        $adminEmail = (string) config('vlace.admin_email');
        $adminPassword = (string) config('vlace.admin_password');

        abort_if($adminEmail === '' || $adminPassword === '', 422, 'VLACE_ADMIN_EMAIL and VLACE_ADMIN_PASSWORD must be set in .env first.');

        $admin = User::updateOrCreate(
            ['email' => Str::lower($adminEmail)],
            [
                'name' => (string) config('vlace.admin_name', 'VLACE Administrator'),
                'password' => Hash::make($adminPassword),
                'role' => 'admin',
                'email_verified_at' => now(),
            ],
        );

        return response("VLACE setup complete. Admin account ready for {$admin->email}. You can remove VLACE_SETUP_KEY from .env after confirming login.", 200)
            ->header('Content-Type', 'text/plain');
    }
}
