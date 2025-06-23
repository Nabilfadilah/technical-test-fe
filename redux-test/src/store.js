// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';

// setup store utama dengan reducer cart
// membuat store global Redux
export const store = configureStore({
  reducer: {
    cart: cartReducer, // menghubungkan slice cart ke state global Redux
  },
});
