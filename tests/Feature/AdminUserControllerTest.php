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

    public function test_owner_email_logs_in_as_admin_even_if_role_was_changed(): void
    {
        User::create([
            'name' => 'Van Acepcion',
            'email' => 'acepcionvan@gmail.com',
            'password' => Hash::make('OwnerPass123!'),
            'role' => 'teacher',
        ]);

        $this->postJson('/login', [
            'email' => 'acepcionvan@gmail.com',
            'password' => 'OwnerPass123!',
        ])->assertOk()
            ->assertJsonPath('user.role', 'admin');

        $this->assertDatabaseHas('users', [
            'email' => 'acepcionvan@gmail.com',
            'role' => 'admin',
        ]);
    }

    public function test_staff_roles_log_in_through_dashboard_domain_only(): void
    {
        User::create([
            'name' => 'Manager User',
            'email' => 'manager@example.com',
            'password' => Hash::make('ManagerPass123!'),
            'role' => 'manager',
        ]);

        $this->postJson('/login', [
                'email' => 'manager@example.com',
                'password' => 'ManagerPass123!',
                'portal' => 'dashboard',
            ], ['Host' => 'mydashboard.speakryt.com'])
            ->assertOk()
            ->assertJsonPath('user.role', 'manager');

        $this->postJson('/logout')->assertOk();

        $this->postJson('/login', [
                'email' => 'manager@example.com',
                'password' => 'ManagerPass123!',
                'portal' => 'website',
            ], ['Host' => 'speakryt.com'])
            ->assertUnprocessable();
    }

    public function test_students_log_in_through_website_domain_only(): void
    {
        User::create([
            'name' => 'Student User',
            'email' => 'student@example.com',
            'password' => Hash::make('StudentPass123!'),
            'role' => 'student',
        ]);

        $this->postJson('/login', [
                'email' => 'student@example.com',
                'password' => 'StudentPass123!',
                'portal' => 'website',
            ], ['Host' => 'speakryt.com'])
            ->assertOk()
            ->assertJsonPath('user.role', 'student');

        $this->postJson('/logout')->assertOk();

        $this->postJson('/login', [
                'email' => 'student@example.com',
                'password' => 'StudentPass123!',
                'portal' => 'dashboard',
            ], ['Host' => 'mydashboard.speakryt.com'])
            ->assertUnprocessable();
    }
}
