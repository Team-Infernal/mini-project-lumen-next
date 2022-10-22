<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersController extends Controller
{
  public function __construct()
  {
  }

  public function authenticate(Request $request)
  {
    $this->validate($request, [
      "email" => "required",
      "password" => "required",
    ]);
    $user = Users::where("email", $request->input("email"))->first();

    if (Hash::check($request->input("password"), $user->password)) {
      $apikey = base64_encode(Str::random(40));
      Users::where("email", $request->input("email"))->update(["api_key" => "$apikey"]);

      return response()->json(["api_key" => $apikey], 200);
    } else {
      return response("", 401);
    }
  }
}
