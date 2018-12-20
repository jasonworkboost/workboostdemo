<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/event', [
    'uses' => 'EventController@postEvent'
]);

Route::post('/events', [
    'uses' => 'EventController@postEvents'
]);

Route::post('/submit', [
    'uses' => 'EventController@postSubmit'
]);

Route::post('/refresh', [
    'uses' => 'EventController@postRefresh'
]);

Route::post('/detail', [
    'uses' => 'EventController@postDetail'
]);

Route::post('/lang', [
    'uses' => 'EventController@postLang'
]);