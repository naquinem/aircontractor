<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Schedule;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ScheduleRequest;
use App\Http\Resources\ScheduleResource;

class AuthController extends Controller {
    // register a new user method
    public function register(RegisterRequest $request) {

        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }

    // login a user method
    public function login(LoginRequest $request) {
        $data = $request->validated();

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'user' => new UserResource($user),
            'token' => $token,
        ])->withCookie($cookie);
    }

    // logout a user method
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged out successfully!'
        ])->withCookie($cookie);
    }
    public function user(Request $request) {
        return new UserResource($request->user());
    }

    // get the authenticated user method
    public function token(Request $request) {
        $token = $request->user()->createToken('token')->plainTextToken;
        $cookie = cookie('token', $token, 60 * 24);
        return response()->json([
            'token' => $token,
        ])->withCookie($cookie);
    }
    public function schedule(ScheduleRequest $request) {

        $data = $request->validated();
        if($data){
            $user = Schedule::create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'message' => $data['message'],
            ]);

            return response()->json([
                'user' => $user,
            ]);
        } else {
            return response()->json([
                "message" => "Failed to submit request"
            ]);
        }

    }

}
