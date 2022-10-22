<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return ['Laravel' => app()->version()];
});
Route::group(["prefix" => "api"], function () {
  Route::get("articles", [ArticleController::class, "showAll"]);
  Route::get("articles/{id}", [ArticleController::class, "showOne"]);
  Route::post("articles", [ArticleController::class, "create"])->middleware(["auth:sanctum", "role:author"]);
  Route::put("articles/{id}", [ArticleController::class, "update"])->middleware(["auth:sanctum", "role:author"]);
  Route::delete("articles/{id}", [ArticleController::class, "delete"])->middleware(["auth:sanctum", "role:author"]);
});

require __DIR__ . '/auth.php';
