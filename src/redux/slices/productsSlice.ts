import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE } from '../../constans/errors';
import { getAllProducts, getProducts } from '../../services/Products';
import { Categories } from '../../types/Categories';
import { Product } from '../../types/Product';

export interface ProductsState {
  items: Product[];
  loading: boolean;
}
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  (category: Categories) => {
    return getProducts(category);
  },
);

export const fetchAllProducts = createAsyncThunk('products/fetch', () => {
  const response = getAllProducts();

  return response;
});

const initialState: ProductsState = {
  items: [],
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.loading = false;
      toast.error(ERROR_MESSAGE);
    });

    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.loading = false;
      toast.error(ERROR_MESSAGE);
    });
  },
});

export default productsSlice;
