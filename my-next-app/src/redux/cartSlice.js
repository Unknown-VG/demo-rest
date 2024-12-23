'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'http://localhost:8000';

// Fetch Cart with user_id (either logged-in or guest)
export const fetchCart = createAsyncThunk('cart/fetchCart', async (user_id) => {
  const response = await axios.get(`${API_URL}/api/cart`, { params: { user_id } });
  return response.data;
});

// Update Cart with user_id (either logged-in or guest)
export const updateCart = createAsyncThunk('cart/updateCart', async ({ cartData, user_id }) => {
  const response = await axios.post(`${API_URL}/api/cart`, { ...cartData, user_id });
  return response.data;
});

// Add Product to Cart
export const addProductToCart = createAsyncThunk('cart/addProductToCart', async ({ product, user_id }) => {
  const response = await axios.post(`${API_URL}/api/cart`, { user_id, products: [product] });
  return response.data;
});

// Increment product quantity in the cart
export const incrementProductQuantity = createAsyncThunk('cart/incrementProductQuantity', async ({ productId, user_id, cart }) => {
  const updatedCart = { ...cart };
  const product = updatedCart.products.find(p => p.id === productId);
  if (product) {
    product.quantity += 1;
  }

  const response = await axios.post(`${API_URL}/api/cart`, { user_id, products: updatedCart.products });
  return response.data;
});

// Decrement product quantity in the cart
export const decrementProductQuantity = createAsyncThunk('cart/decrementProductQuantity', async ({ productId, user_id, cart }) => {
  const updatedCart = { ...cart };
  const product = updatedCart.products.find(p => p.id === productId);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
  }

  const response = await axios.post(`${API_URL}/api/cart`, { user_id, products: updatedCart.products });
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: null,
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(incrementProductQuantity.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(decrementProductQuantity.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;
