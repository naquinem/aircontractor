<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use Illuminate\Http\Request;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;

class CustomerController extends Controller
{
    public function store(CustomerRequest $request)
    {
        $data = $request->validated();
        $user = Customers::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'contact_number' => $data['contact_number'],
            'address' => $data['address'],
            'reviews' => $data['reviews'],
        ]);

        return response()->json([
            'status' => 200,
            'user' => $user,
        ]);
    }
    public function index()
    {

        $user = Customers::all();
        if($user->count() > 0) {
            return response()->json([
                'status' => 200,
                'user' => $user
            ], 200);
        } else {
            return response()->json([
                'status' => 422,
                'error' => 'error'
            ], 422);
        }
    }
}
