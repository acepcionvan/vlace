<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AdminUserController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        abort_unless(Auth::user()?->isAdmin(), 403);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'role' => ['required', Rule::in(['admin', 'manager', 'teacher', 'staff'])],
            'password' => ['nullable', 'string', 'min:8'],
        ]);

        $email = Str::lower(trim($validated['email']));
        $user = User::where('email', $email)->first();
        $role = in_array($email, config('app.owner_emails', []), true) ? 'admin' : $validated['role'];

        if (! $user && blank($validated['password'] ?? null)) {
            throw ValidationException::withMessages([
                'password' => 'Create a temporary password so this user can sign in.',
            ]);
        }

        $attributes = [
            'name' => $validated['name'],
            'email' => $email,
            'role' => $role,
            'email_verified_at' => now(),
        ];

        if (filled($validated['password'] ?? null)) {
            $attributes['password'] = Hash::make($validated['password']);
        }

        $user = User::updateOrCreate(['email' => $email], $attributes);

        return response()->json([
            'ok' => true,
            'user' => $user->dashboardPayload(),
        ]);
    }

    public function password(Request $request): JsonResponse
    {
        abort_unless(Auth::user()?->isAdmin(), 403);

        $validated = $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = User::where('email', Str::lower(trim($validated['email'])))->firstOrFail();
        $user->forceFill([
            'password' => Hash::make($validated['password']),
        ])->save();

        return response()->json([
            'ok' => true,
            'user' => $user->dashboardPayload(),
        ]);
    }
}
