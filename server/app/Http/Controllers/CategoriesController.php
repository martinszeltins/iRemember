<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Return all user's categories
     *
     * @param  Category  $category
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Category::where('user_id', request('user_id'))->get();
    }
}
