<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array('as' => 'home', function()
{
	return View::make('hello');
}));

Route::get('bbcode/preview', array('as' => 'bbcode_preview', function()
{
	$code = new Decoda\Decoda('Hello, my name is [b]Miles Johnson[/b], you may visit my website at [url]http://milesj.me[/url].');
	$code->defaults();
	// Or load filters and hooks
	return $code->parse();
	//return View::make('hello');
}));