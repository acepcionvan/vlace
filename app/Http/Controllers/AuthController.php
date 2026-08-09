<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);
        $credentials['email'] = Str::lower(trim($credentials['email']));

        $this->ensurePrototypeRoleAccount($credentials['email'], $credentials['password']);

        if (! Auth::attempt($credentials, $request->boolean('remember'))) {
            throw ValidationException::withMessages([
                'email' => 'The provided credentials do not match an approved VLACE account.',
            ]);
        }

        $request->session()->regenerate();

        /** @var User $user */
        $user = Auth::user();
        if ($user->isOwnerEmail() && $user->role !== 'admin') {
            $user->forceFill(['role' => 'admin'])->save();
        }

        return response()->json([
            'user' => $user->dashboardPayload(),
        ]);
    }

    private function ensurePrototypeRoleAccount(string $email, string $password): void
    {
        $prototypeAccounts = [
            'manager@vlace.com' => ['name' => 'Angela Reyes', 'role' => 'manager'],
            'teacher@vlace.com' => ['name' => 'Maria Santos', 'role' => 'teacher'],
        ];

        if ($password !== 'prototype' || ! isset($prototypeAccounts[$email])) {
            return;
        }

        User::updateOrCreate(
            ['email' => $email],
            [
                'name' => $prototypeAccounts[$email]['name'],
                'password' => Hash::make($password),
                'role' => $prototypeAccounts[$email]['role'],
                'email_verified_at' => now(),
            ],
        );
    }

    public function logout(Request $request): RedirectResponse|JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if ($request->expectsJson()) {
            return response()->json(['ok' => true]);
        }

        return redirect()->route('home');
    }
}
