import {useDispatch} from "react-redux";
import {addToCart} from "../features/cartSlice";

function Product({product}) {
  const dispatch = useDispatch(); // hook untuk dispatch action ke Redux

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {/* ketika tombol diklik, dispatch action addToCart dengan data produk */}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default Product;
