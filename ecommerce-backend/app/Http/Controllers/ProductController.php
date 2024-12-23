<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // Fetch all products
    public function getProducts()
    {
        $products = Product::limit(10)->get(); // Get all products from the database
        return response()->json($products);
    }

    // Fetch a single product by ID
    public function getProduct($id)
    {
        $product = Product::find($id); // Find product by ID

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
}
