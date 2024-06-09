<?php

// app/Http/Controllers/GoogleAuthController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver("google")->stateless()->redirect();
    }

    public function callback()
    {
        $googleUser = Socialite::driver("google")->stateless()->setScopes(['profile', 'email'])->user();
        $user = User::updateOrCreate(
            [
                'google_id' => $googleUser->id
            ],
            [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'password' => Str::password(12),
                'email_verified_at' => now()
            ]
        );
    
        Auth::login($user);
        
        // Generate a token for the user
        $token = $user->createToken('Personal Access Token')->plainTextToken;

        // Redirect to the frontend with the token as a query parameter
        // return redirect(config('app.frontend_url') . '/auth/google/callback?token=' . $token);
        return redirect(config('app.frontend_url') . '/auth/google/callback');
    }
}
