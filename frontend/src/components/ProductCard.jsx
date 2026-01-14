import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${product._id}`)}>
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R {product.price}</p>
    </div>
  );
}

export default ProductCard;
