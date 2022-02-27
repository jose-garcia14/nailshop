import React from "react";
import "./ProductCardStyle.css";
function ProductCard({ id, name, image, price }) {
  return (
    <div className="productCard">
      <div>
        <img src={image} alt={name} />
        <div>{name}</div>
        <div>from ${price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
