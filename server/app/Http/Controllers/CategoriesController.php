<?php

use App\Models\Category;
namespace App\Http\Controllers;

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
    public function index(Category $category)
    {
        return $category->all();
    }
}
