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

    Route::domain('guest.Tears.test')->middleware('guest')->group(function () {
        // -- /api/login
        Route::post('login', 'Auth\LoginController@login');
        // -- /api/register
        Route::post('register', 'Auth\RegisterController@register');
        // -- /api/password/email
        Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
        // -- /api/password/reset
        Route::post('password/reset', 'Auth\ResetPasswordController@reset');
        // -- /api/oauth/
        // Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
        // Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
    
    });
    
    Route::domain('admin.Tears.test')->middleware('auth:admin')->group(function () {
        Route::post('logout', 'Auth\LoginController@logout');
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::patch('settings/profile', 'Settings\ProfileController@update');
        Route::patch('settings/password', 'Settings\PasswordController@update');
    });