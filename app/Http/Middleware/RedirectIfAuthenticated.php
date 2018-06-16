<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
         // To check if user is logged in as admin
        if (Auth::guard('admin')->check()) {
            return  redirect()->route('admin');
        }
        // To check if user is logged in as student
        if (Auth::guard('student')->check()) {
            return  redirect()->route('student');
        }
        // To check if user is logged in as teacher
        if (Auth::guard('teacher')->check()) {
            return  redirect()->route('student');
        }
        // To check if user is a guess
        // if (Auth::guest()) {
        //     return  redirect()->route('login');
        // }

        return $next($request);
    }
}
