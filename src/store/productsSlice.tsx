import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataProducts } from "../Types/Types";

function getItemFromLocalStorage(key: string, defaultValue: any) {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch (err) {
    localStorage.removeItem(key)
    return undefined
  }
}

const initialState = {
  products: [] as Array<IDataProducts>,
  cart: getItemFromLocalStorage('cartData', []),
  cartCount: getItemFromLocalStorage('cartCount', 0),
  isLoading: false as boolean,
  error: "" as any,
  favorites: getItemFromLocalStorage('favorites', []),
  favoritesCounter: getItemFromLocalStorage('favoritesCounter', 0),
  aboutProduct: getItemFromLocalStorage('aboutProduct', [])
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

function deleteCartItem(store: Array<IDataProducts>, itemId: number) {
  return store.filter((item) => item.id !== itemId);
};


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCart: (store, action) => {
      const findTheSameProduct = store.cart.findIndex(
        (el: IDataProducts) => el.id === action.payload.id
      );
      store.cart = AddProductFunc(store.cart, action);
      if (findTheSameProduct === -1) {
        store.cartCount = store.cartCount + 1;
      }
      localStorage.setItem('cartData', JSON.stringify(store.cart));
      localStorage.setItem('cartCount', JSON.stringify(store.cartCount));
    },

    removeCart: (store, action) => {
      const find = store.cart.findIndex((el: IDataProducts) => el.id === action.payload.id);

      if (find !== -1) {
        if (store.cart[find].count > 1) {
          store.cart[find].count -= 1;
        } else {
          store.cart = store.cart.filter((el: IDataProducts) => el.id !== action.payload.id);
          store.cartCount -= 1;
        }
      }

      if (store.cart.length === 0) {
        localStorage.removeItem('cartData');
        localStorage.removeItem('cartCount');
      } else {
        localStorage.setItem('cartData', JSON.stringify(store.cart));
        localStorage.setItem('cartCount', JSON.stringify(store.cartCount));
      }

    },

    deleteCart: (store, action) => {
      const findTheSame = store.cart.find((el:IDataProducts) => el.id === action.payload.id)
      store.cart = deleteCartItem(store.cart, action.payload.id)
      if (findTheSame){
        store.cartCount = store.cartCount - 1;
      }

      if (store.cart.length === 0) {
        localStorage.removeItem('cartData');
        localStorage.removeItem('cartCount');
      } else {
        localStorage.setItem('cartData', JSON.stringify(store.cart));
        localStorage.setItem('cartCount', JSON.stringify(store.cartCount));
      }
    },


    addFavorites: (store, action) => {
      store.favorites = AddProductFunc(
        store.favorites,
        action
      );
      store.favoritesCounter = store.favoritesCounter + 1;

      localStorage.setItem('favorites', JSON.stringify(store.favorites));
      localStorage.setItem('favoritesCounter', JSON.stringify(store.favoritesCounter));
    },

    toggleFavorite: (store, action) => {
      store.favorites = toggleProductFunc(store.favorites, action);
      store.favoritesCounter = store.favoritesCounter - 1;

      if (store.favorites.length === 0) {
        localStorage.removeItem('favorites');
        localStorage.removeItem('favoritesCounter');
      } else {
        localStorage.setItem('favorites', JSON.stringify(store.favorites));
        localStorage.setItem('favoritesCounter', JSON.stringify(store.favoritesCounter));
      }

    },

    deleteFavorite: (store, action) => {
      store.favorites = deleteCartItem(store.favorites, action.payload.id)
      store.favoritesCounter = store.favoritesCounter - 1;

      if (store.favorites.length === 0) {
        localStorage.removeItem('favorites');
        localStorage.removeItem('favoritesCounter');
      } else {
        localStorage.setItem('favorites', JSON.stringify(store.favorites));
        localStorage.setItem('favoritesCounter', JSON.stringify(store.favoritesCounter));
      }
    },

    aboutProduct: (store, action) => {
      let findTheSameProduct = store.products.filter((items: IDataProducts) => items.id === action.payload.id)
      store.aboutProduct = findTheSameProduct
      localStorage.setItem('aboutProduct', JSON.stringify(findTheSameProduct))
    }
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

export const { addCart, removeCart, toggleFavorite, addFavorites, deleteCart, deleteFavorite, aboutProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
