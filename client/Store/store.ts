import { createSlice } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemInCart: any = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state: any, action: any) => {
      const itemInCart: any = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      itemInCart.quantity += 1;
    },
    decrementQuantity: (state: any, action: any) => {
      const itemInCart: any = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      }
    },
    removeFromCart: (state: any, action: any) => {
      const remove = state.cart.filter(
        (item: any) => item.id !== action.payload.id
      );
      state.cart = remove;
    },
    /* clear cart */
    clearCart: (state: any) => {
      state.cart = [];
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
/* */
import { configureStore } from "@reduxjs/toolkit";
/* export const store = configureStore({
reducer: cartSlice.reducer,
}); */
/* persisting store */
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
