import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataProducts } from "../Types/Types";

const initialState = {
  products: [] as Array<IDataProducts>,
  cart: [] as Array<IDataProducts>,
  isLoading: false as boolean,
  error: "" as any,
  cartCount: 0 as number,
  favorites: [] as Array<IDataProducts>,
  favoritCounter: 0 as number,
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

function AddProductFunc(
  initialStoreProperty: Array<IDataProducts>,
  action: { payload: IDataProducts },
  counter: number
) {
  let findTheSameProduct = initialStoreProperty.findIndex(
    (el) => el.id === action.payload.id
  );

  if (findTheSameProduct >= 0) {
    initialStoreProperty[findTheSameProduct].count += 1;
  } else {
    initialStoreProperty.push({ ...action.payload, count: 1 });
  }

  return initialStoreProperty;
}

function toggleProductFunc(
  store: Array<IDataProducts>,
  action: { payload: IDataProducts }
) {
  return (store = store.filter((el) => el.id !== action.payload.id));
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCart: (store, action) => {
      const findTheSameProduct = store.cart.findIndex(
        (el) => el.id === action.payload.id
      );
      store.cart = AddProductFunc(store.cart, action, store.cartCount);
      if (findTheSameProduct === -1) {
        store.cartCount = store.cartCount + 1;
      }
    },

    removeCart: (store, action) => {
      const find = store.cart.findIndex((el) => el.id === action.payload.id);

      if (find !== -1) {
        if (store.cart[find].count > 1) {
          store.cart[find].count -= 1;
        } else {
          store.cart = store.cart.filter((el) => el.id !== action.payload.id);
          store.cartCount -= 1;
        }
      }
    },

    addFavorites: (store, action) => {
      store.favorites = AddProductFunc(
        store.favorites,
        action,
        store.favoritCounter
      );
      store.favoritCounter = store.favoritCounter + 1;
    },

    toggleFavorite: (store, action) => {
      store.favorites = toggleProductFunc(store.favorites, action);
      store.favoritCounter = store.favoritCounter - 1;
    },
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

export const { addCart, removeCart, toggleFavorite, addFavorites } =
  productsSlice.actions;
export default productsSlice.reducer;
