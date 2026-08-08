<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminUserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_create_a_real_teacher_login(): void
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('AdminPass123!'),
            'role' => 'admin',
        ]);

        $this->actingAs($admin)
            ->postJson('/admin/users', [
                'name' => 'Maria Santos',
                'email' => 'teacher@example.com',
                'password' => 'TeacherPass123!',
                'role' => 'teacher',
            ])
            ->assertOk()
            ->assertJsonPath('user.role', 'teacher');

        $this->postJson('/logout')->assertOk();

        $this->postJson('/login', [
            'email' => 'teacher@example.com',
            'password' => 'TeacherPass123!',
        ])->assertOk()
            ->assertJsonPath('user.email', 'teacher@example.com');
    }

    public function test_admin_can_reset_a_real_user_password(): void
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('AdminPass123!'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Staff User',
            'email' => 'staff@example.com',
            'password' => Hash::make('OldPass123!'),
            'role' => 'staff',
        ]);

        $this->actingAs($admin)
            ->postJson('/admin/users/password', [
                'email' => 'staff@example.com',
                'password' => 'NewPass123!',
                'password_confirmation' => 'NewPass123!',
            ])
            ->assertOk();

        $this->postJson('/logout')->assertOk();

        $this->postJson('/login', [
            'email' => 'staff@example.com',
            'password' => 'NewPass123!',
        ])->assertOk()
            ->assertJsonPath('user.email', 'staff@example.com');
    }
}
