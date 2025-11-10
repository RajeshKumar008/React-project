import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/CartSlice";

function Badge({ children }) {
  return <span className="ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs">{children}</span>;
}

export default function Header() {
  const count = useSelector(selectCartCount);
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">Leaf+Co</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/products" className={({isActive}) => `rounded px-3 py-1 ${isActive ? 'bg-gray-200' : ''}`}>Products</NavLink>
          <NavLink to="/cart" className={({isActive}) => `rounded px-3 py-1 ${isActive ? 'bg-gray-200' : ''}`}>
            <span className="inline-flex items-center gap-2">🛒 Cart<Badge>{count}</Badge></span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
