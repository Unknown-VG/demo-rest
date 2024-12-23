'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Fetch all products
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(`${API_URL}/api/products`);
  console.log(response.data)
  return response.data;
});

// Fetch a single product by ID
export const getProduct = createAsyncThunk('products/getProduct', async (id) => {
  const response = await axios.get(`${API_URL}/api/product/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log("heloo sdsd")
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;
