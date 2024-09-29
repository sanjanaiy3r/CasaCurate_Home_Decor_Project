// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This is a mock API call. Replace with your actual API endpoint.
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
