import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Currency({ value }) {
  return <span>₹{value.toLocaleString("en-IN")}</span>;
}

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector((s) => Boolean(s.cart.items[product.id]));
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm">
      <img src={product.img} alt={product.name} className="h-40 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="font-medium"><Currency value={product.price} /></span>
        </div>
        <span className="text-xs opacity-70">{product.category}</span>
        <button
          disabled={inCart}
          onClick={() => dispatch(addToCart(product.id))}
          className={`mt-auto rounded-xl px-3 py-2 font-medium ${inCart ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'bg-black text-white hover:opacity-90'}`}
        >
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
