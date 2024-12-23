<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    // Add or Update Cart
    public function updateCart(Request $request)
    {
        $user_id = $request->user_id; // Get user_id from the frontend (can be guest or logged in)

        $cartData = $request->validate([
            'products' => 'required|array',
            'total' => 'required|numeric',
            'discountedTotal' => 'required|numeric',
            'totalProducts' => 'required|integer',
            'totalQuantity' => 'required|integer',
        ]);

        // Store or update the cart data for the user (either guest or logged-in)
        $cart = Cart::updateOrCreate(
            ['user_id' => $user_id],
            $cartData
        );

        return response()->json($cart);
    }

    // Get Cart
    public function getCart(Request $request)
    {
        $user_id = $request->user_id; // Get user_id from the frontend (can be guest or logged in)

        $cart = Cart::where('user_id', $user_id)->first();

        return response()->json($cart ?? ['message' => 'No cart found']);
    }

    // Clear Cart
    public function clearCart(Request $request)
    {
        $user_id = $request->user_id; // Get user_id from the frontend (can be guest or logged in)

        Cart::where('user_id', $user_id)->delete();

        return response()->json(['message' => 'Cart cleared']);
    }
}
