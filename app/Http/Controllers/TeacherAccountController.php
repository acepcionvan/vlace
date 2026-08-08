<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class TeacherAccountController extends Controller
{
    public function __invoke(): Response
    {
        abort_unless(Auth::user()?->isAdmin(), 403);

        $teacher = User::updateOrCreate(
            ['email' => 'teacher@vlace.com'],
            [
                'name' => 'Maria Santos',
                'password' => Hash::make('prototype'),
                'role' => 'teacher',
                'email_verified_at' => now(),
            ],
        );

        return response("Teacher login ready: {$teacher->email} / prototype", 200)
            ->header('Content-Type', 'text/plain');
    }
}
