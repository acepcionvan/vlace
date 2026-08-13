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

        if (! $this->allowedForPortal($request, $user)) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            $message = $user->isStudent()
                ? 'Students must sign in through the SpeakRyt website.'
                : 'Admin, manager, and teacher accounts must sign in through mydashboard.speakryt.com.';

            return response()->json([
                'message' => $message,
                'errors' => ['email' => [$message]],
            ], 422);
        }

        return response()->json([
            'user' => $user->dashboardPayload(),
        ]);
    }

    private function ensurePrototypeRoleAccount(string $email, string $password): void
    {
        $prototypeAccounts = [
            'student@vlace.com' => ['name' => 'Liam Chen', 'role' => 'student'],
            'liam.chen@speakryt.com' => ['name' => 'Liam Chen', 'role' => 'student'],
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

    private function allowedForPortal(Request $request, User $user): bool
    {
        $portal = Str::lower((string) $request->input('portal', ''));
        $host = Str::lower($request->getHost());
        $dashboardHost = Str::lower((string) config('vlace.dashboard_host', 'mydashboard.speakryt.com'));
        $websiteHosts = array_map('strtolower', config('vlace.website_hosts', ['speakryt.com', 'www.speakryt.com']));
        $localHosts = ['localhost', '127.0.0.1', '::1'];
        $isLocal = in_array($host, $localHosts, true);

        if ($user->isStudent()) {
            return $isLocal
                ? in_array($portal, ['', 'website'], true)
                : $portal !== 'dashboard' && in_array($host, $websiteHosts, true);
        }

        return $isLocal
            ? in_array($portal, ['', 'dashboard'], true)
            : $portal !== 'website' && $host === $dashboardHost;
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
