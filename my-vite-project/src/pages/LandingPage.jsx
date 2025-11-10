import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600)',
      backgroundSize: 'cover',
      backgroundPosition: 'auto'
    }}>
      <div className="min-h-screen bg-black/40">
        <Header />
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 p-6 pt-24 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow">Leaf+Co</h1>
          <p className="max-w-prose text-lg leading-relaxed">
            We are a modern houseplant boutique bringing lush, air-purifying greenery to your home.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="rounded-2xl bg-white/90 px-5 py-2 font-medium text-black shadow hover:bg-white"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}
