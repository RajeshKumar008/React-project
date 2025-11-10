import Header from "../components/Header";
import { products } from "../store/cartSlice";
import ProductCard from "../components/ProductCard";

function Badge({ children }) {
  return <span className="ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs">{children}</span>;
}

export default function ProductsPage() {
  const groups = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});
  const categories = Object.keys(groups);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-6xl p-4">
        <h2 className="mb-2 text-2xl font-bold">Shop Houseplants</h2>
        <p className="mb-6 text-sm opacity-70">Browse by category. Add plants to your cart; buttons disable after adding.</p>
        <div className="space-y-8">
          {categories.map((cat) => (
            <section key={cat}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{cat}</h3>
                <Badge>{groups[cat].length} items</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {groups[cat].map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
