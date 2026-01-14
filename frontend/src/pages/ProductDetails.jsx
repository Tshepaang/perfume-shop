import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    fetch(`http://localhost:5000/api/reviews/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  if (!product) return "Loading...";

  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: R {product.price}</p>

      <h3>Reviews</h3>
      {reviews.map(r => (
        <p key={r._id}>{r.comment}</p>
      ))}

      <button onClick={() => navigator.share?.({ title: product.name })}>
        Share
      </button>
    </>
  );
}

export default ProductDetails;
