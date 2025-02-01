import React, { useState, useEffect } from 'react';
import './shop.css';
import beach from '../../Assets/beach.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import img10 from '../../Assets/img10.jpg';
import img11 from '../../Assets/img11.jpg';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: 'Beach Getaway', price: 300, category: 'Packages', image: beach },
      { id: 2, name: 'Mountain Trekking', price: 200, category: 'Adventures', image: img7 },
      { id: 3, name: 'Travel Backpack', price: 80, category: 'Gear', image: img8 },
      { id: 4, name: 'City Tour', price: 150, category: 'Packages', image: img9 },
      { id: 5, name: 'Hiking Boots', price: 120, category: 'Gear', image: img10 },
      { id: 6, name: 'Safari Adventure', price: 500, category: 'Adventures', image: img11 },
    ];
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setFilteredProducts(
      selectedCategory === 'All'
        ? products
        : products.filter((product) => product.category === selectedCategory)
    );
  };

  return (
    <div className="shop">
      <div className="shopHeader">
        <h1 className="shopTitle">Explore Travel Deals</h1>
        <p className="shopSubtitle">
          Discover packages, gear, and adventures for your next journey!
        </p>
      </div>
      <div className="filterBar">
        {['All', 'Packages', 'Adventures', 'Gear'].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={category === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="productGrid">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div className="productCard" key={product.id}>
              <img src={product.image} alt={product.name} className="productImage" />
              <h3 className="productName">{product.name}</h3>
              <p className="productPrice">${product.price}</p>
              <button className="addToCartBtn">Book Now</button>
            </div>
          ))
        ) : (
          <p>No travel deals found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
