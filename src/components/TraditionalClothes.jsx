// src/TraditionalClothesPage.jsx

import React, { useState } from 'react';
import '../TraditionalClothesPage.jsx';

const products = [
  {
    id: 1,
    name: 'Traditional Dress 1',
    price: 49.99,
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A beautiful traditional dress made with high-quality fabric.',
    image: 'https://via.placeholder.com/300', // You can replace with actual image URLs
  },
  {
    id: 2,
    name: 'Traditional Dress 2',
    price: 59.99,
    sizes: ['S', 'M', 'L'],
    description: 'Elegant and comfortable, perfect for special occasions.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URLs
  },
  {
    id: 3,
    name: 'Traditional Dress 3',
    price: 69.99,
    sizes: ['M', 'L', 'XL'],
    description: 'A vibrant dress that represents cultural beauty and tradition.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URLs
  },
];

const TraditionalClothesPage = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="clothes-page-container">
      <h1>Traditional Clothes</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <div className="size-selector">
                <label htmlFor="size">Select Size:</label>
                <select
                  id="size"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option value="">Choose a size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraditionalClothesPage;
