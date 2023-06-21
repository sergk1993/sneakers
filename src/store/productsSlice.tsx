import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataProducts } from "../Types/Types";

const initialState = {
  products: [] as Array<IDataProducts>,
  cart: [] as Array<IDataProducts>,
  isLoading: false as boolean,
  error: "" as any,
};

export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const response = await fetch(
        "https://63c6490edcdc478e15be59ac.mockapi.io/sneakers"
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (store, action) => {
      let findTheSameProductInCart = store.cart.findIndex(
        (el) => el.id === action.payload.id
      );

      if (findTheSameProductInCart === -1) {
        store.cart.push({ ...action.payload, count: 1 });
      } else {
        store.cart[findTheSameProductInCart].count += 1;
      }
    },

    removeProduct: (store, action) => {},

    toggleProduct: (store, action) => {},
  },

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  toggleProduct,
  // isloading,
} = productsSlice.actions;
export default productsSlice.reducer;
