<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('articles', ['uses' => 'ArticlesController@showAll']);
    $router->get('articles/{id}', ['uses' => 'ArticlesController@showOne']);
    $router->post('articles', ['uses' => 'ArticlesController@create']);
    $router->put('articles/{id}', ['uses' => 'ArticlesController@update']);
    $router->delete('articles/{id}', ['uses' => 'ArticlesController@delete']);
});
