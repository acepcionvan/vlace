<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

#[Fillable(['name', 'email', 'password', 'role', 'email_verified_at'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * @return array{name: string, email: string, role: string}
     */
    public function dashboardPayload(): array
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->effectiveRole(),
        ];
    }

    public function effectiveRole(): string
    {
        if ($this->isOwnerEmail()) {
            return 'admin';
        }

        $role = Str::lower(trim($this->role ?: 'staff'));

        return in_array($role, ['admin', 'manager', 'teacher', 'staff', 'student'], true) ? $role : 'staff';
    }

    public function isAdmin(): bool
    {
        return $this->effectiveRole() === 'admin';
    }

    public function isStudent(): bool
    {
        return $this->effectiveRole() === 'student';
    }

    public function isOwnerEmail(): bool
    {
        $ownerEmails = config('app.owner_emails', ['acepcionvan@gmail.com']);

        return in_array(Str::lower(trim($this->email)), $ownerEmails, true);
    }
}
