import Header from "../components/Header";
import CartRow from "../components/CartRow";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, selectCartCount } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Currency({ value }) {
  return <span>₹{value.toLocaleString("en-IN")}</span>;
}

export default function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-4xl p-4">
        <h2 className="mb-2 text-2xl font-bold">Your Cart</h2>
        <div className="mb-4 flex flex-wrap gap-4 text-sm">
          <span>Total items: <strong>{count}</strong></span>
          <span>Total cost: <strong><Currency value={total} /></strong></span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-xl border bg-white p-6 text-center">
            Your cart is empty. <Link to="/products" className="underline">Continue shopping</Link>.
          </div>
        ) : (
          <div className="space-y-3">{items.map((it) => <CartRow key={it.product.id} item={it} />)}</div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/products" className="rounded-xl border px-4 py-2 hover:bg-gray-50">Continue Shopping</Link>
          <button onClick={() => alert("Checkout coming soon!")} className="rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90">Checkout</button>
        </div>
      </main>
    </div>
  );
}
