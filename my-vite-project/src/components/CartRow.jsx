import { useDispatch } from "react-redux";
import { increment, decrement, remove } from "../store/cartSlice";

function Currency({ value }) {
  return <span>₹{value.toLocaleString("en-IN")}</span>;
}

export default function CartRow({ item }) {
  const dispatch = useDispatch();
  const { product, qty } = item;
  return (
    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-3 rounded-xl border bg-white p-3">
      <img src={product.img} alt={product.name} className="h-16 w-16 rounded object-cover" />
      <div>
        <div className="font-semibold">{product.name}</div>
        <div className="text-sm opacity-70">Unit price: <Currency value={product.price} /></div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(decrement(product.id))} className="rounded-full border px-2 py-1">−</button>
        <span aria-label="quantity" className="w-8 text-center font-medium">{qty}</span>
        <button onClick={() => dispatch(increment(product.id))} className="rounded-full border px-2 py-1">+</button>
        <button onClick={() => dispatch(remove(product.id))} className="ml-2 rounded-xl border px-3 py-1 text-sm hover:bg-gray-50">Delete</button>
      </div>
    </div>
  );
}
