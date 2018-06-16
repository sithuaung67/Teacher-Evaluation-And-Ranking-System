<?php

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

Route::domain('teacher.Tears.test')->middleware('auth:teacher')->group(function () {
    Route::get('{path}', function () {
        return view('teacher');
    })->where('path', '(.*)');
});
Route::domain('student.Tears.test')->middleware('auth:student')->group(function () {
    Route::get('{path}', function () {
        return view('student');
    })->where('path', '(.*)');
});
Route::domain('admin.Tears.test')->middleware('auth.basic')->group(function () {
    Route::get('{path}', function () {
        return view('admin');
    })->where('path', '(.*)');
});
Route::domain('guest.Tears.test')->middleware('guest')->name("guest")->group(function () {
    Route::get('{path}', function () {
        return view('guest');
    })->where('path', '(.*)');
});

Route::domain('Tears.test')->middleware('guest')->group(function () {
    Route::get('{path}', function () {
        return redirect()->route('guest',['path' => '/']);
    })->where('path', '(.*)');
});


Route::domain('guest.Tears.test')->middleware('guest')->group(function () {
    Route::get('/login', function () {
        return view('guest');
    })->name("login");
});