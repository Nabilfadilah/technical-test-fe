import {useState} from "react";
import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";

const dummyProduct = {
  id: 1,
  name: "Keyboard",
  price: 200000,
};

function App() {
  return (
    <>
      <div>
        <h1>React Redux Shop</h1>
        {/* menampilkan produk dan keranjang */}
        <Product product={dummyProduct} />
        <Cart />
      </div>

      {/* <div>
        <p>Menampilkan Daftar card</p>
        <Cart />
      </div>

      <div>
        <p>Tambah item cart</p>
        <Product />
      </div> */}
    </>
  );
}

export default App;

// Alur Kerja Singkat Redux-nya:
// 1. Product.jsx memanggil addToCart() → mengirim data produk ke Redux.
// 2. Redux menyimpan data di state.cart.items.
// 3. Cart.jsx mengambil items dari Redux dan menampilkannya.
// 4. Jika user klik "Remove", maka removeFromCart() dijalankan untuk menghapus item dari state.
