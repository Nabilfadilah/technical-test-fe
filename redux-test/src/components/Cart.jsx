import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../features/cartSlice";

function Cart() {
  // mengambil data cart dari state global Redux
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch(); // untuk mengirim action

  return (
    <div>
      <h2>Cart Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          {/* tombol untuk menghapus item dari cart */}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
