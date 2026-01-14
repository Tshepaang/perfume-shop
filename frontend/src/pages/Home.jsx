import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <h1>Luxury Perfumes</h1>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}

export default Home;
