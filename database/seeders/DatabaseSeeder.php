<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => env('VLACE_ADMIN_EMAIL', 'admin@vlace.com')],
            [
                'name' => env('VLACE_ADMIN_NAME', 'VLACE Administrator'),
                'password' => Hash::make(env('VLACE_ADMIN_PASSWORD', 'prototype')),
                'role' => 'admin',
                'email_verified_at' => now(),
            ],
        );

        User::updateOrCreate(
            ['email' => env('VLACE_MANAGER_EMAIL', 'manager@vlace.com')],
            [
                'name' => env('VLACE_MANAGER_NAME', 'Angela Reyes'),
                'password' => Hash::make(env('VLACE_MANAGER_PASSWORD', 'prototype')),
                'role' => 'manager',
                'email_verified_at' => now(),
            ],
        );
    }
}
