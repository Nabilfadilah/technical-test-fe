import { createSlice } from '@reduxjs/toolkit';

// state awal untuk cart/keranjang belanja
const initialState = {
  items: [], // menyimpan daftar produk yang dimasukkan ke dalam keranjang
};

// membuat slice Redux bernama 'cart'
const cartSlice = createSlice({
  name: 'cart', // nama slice, akan menjadi prefix di action type (contoh: cart/addToCart)
  initialState, // state awal dari slice ini
  reducers: {
    // menambahkan item ke dalam cart
    addToCart(state, action) {
      state.items.push(action.payload); // menambahkan produk dari payload ke array items
    },

    // menghapus item dari cart berdasarkan ID
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      // menyaring semua item dan menyisakan item yang ID-nya TIDAK sama dengan payload
    },
  },
});

// mengekspor action (agar bisa dipakai di komponen)
export const { addToCart, removeFromCart } = cartSlice.actions;

// mengekspor reducer untuk digunakan di `store.js`
export default cartSlice.reducer;
