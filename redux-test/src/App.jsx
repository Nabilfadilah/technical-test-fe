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
