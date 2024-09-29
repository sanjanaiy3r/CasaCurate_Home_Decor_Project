// src/components/ProductCard.js
import React, { useState } from 'react';

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-card">
      <div className="product-slideshow">
        <button onClick={prevImage} className="slideshow-btn prev">&lt;</button>
        <img src={product.images[currentImageIndex]} alt={product.name} />
        <button onClick={nextImage} className="slideshow-btn next">&gt;</button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">{product.price} INR</p>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="add-to-wishlist">♡</button>
      </div>
    </div>
  );
}

export default ProductCard;
