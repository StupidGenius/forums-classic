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

Route::post('bbcode/preview', array('as' => 'bbcode_preview', function()
{
	$code = new Decoda\Decoda(Input::get('data'));
	$code->addFilter(new Decoda\Filter\EmailFilter());
	$code->addFilter(new Decoda\Filter\UrlFilter());
	$code->addFilter(new Decoda\Filter\TextFilter());
	$code->addFilter(new Decoda\Filter\CodeFilter());
	$code->addFilter(new Decoda\Filter\ImageFilter());
	$code->addFilter(new Decoda\Filter\QuoteFilter());
	$code->addFilter(new Decoda\Filter\BlockFilter());
	$code->defaults();
	// Or load filters and hooks
	return $code->parse();
	//return View::make('hello');
}));