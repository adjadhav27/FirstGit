import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = (props) => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddProduct = () => {
    const product = { productName, productId, sellingPrice };

    const existingProducts = JSON.parse(localStorage.getItem(category)) || [];
    existingProducts.push(product);
    localStorage.setItem(category, JSON.stringify(existingProducts));
    // Update state by calling the callback function
    props.onProductAdded(existingProducts, category);
    // Reset form fields
    setProductName('');
    setProductId('');
    setSellingPrice('');
  };

  return (
    <div className="product-form-container">
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={handleProductNameChange}
      />
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={handleProductIdChange}
      />
      <input
        type="text"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={handleSellingPriceChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Choose Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Food">Food</option>
        <option value="Skincare">Skincare</option>
      </select>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
