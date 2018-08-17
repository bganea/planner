<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlannerController extends Controller {
	public function index(){
		return view('planner');
	}
}
