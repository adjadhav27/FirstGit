import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import './AdminPage.css';

const AdminPage = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [foodProducts, setFoodProducts] = useState([]);
  const [skincareProducts, setSkincareProducts] = useState([]);

  useEffect(() => {
    // Load product data from localStorage when component mounts
    const storedElectronicsProducts = JSON.parse(localStorage.getItem('Electronics')) || [];
    const storedFoodProducts = JSON.parse(localStorage.getItem('Food')) || [];
    const storedSkincareProducts = JSON.parse(localStorage.getItem('Skincare')) || [];

    if(storedElectronicsProducts.length!==0) setElectronicsProducts(storedElectronicsProducts);
    if(storedFoodProducts.length!==0) setFoodProducts(storedFoodProducts);
    if(storedSkincareProducts.length!==0) setSkincareProducts(storedSkincareProducts);
  }, []);

  const handleProductAdded = (newProducts, category) => {
    if (category === 'Food') {
      setFoodProducts(newProducts);
    } else if (category === 'Electronics') {
      setElectronicsProducts(newProducts);
    } else {
      setSkincareProducts(newProducts);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm
        onProductAdded={handleProductAdded}
      />
      <hr />
      <h2>Product Listings</h2>
      <ProductList category="Electronics" products={electronicsProducts} setProducts={setElectronicsProducts} />
      <ProductList category="Food" products={foodProducts} setProducts={setFoodProducts} />
      <ProductList category="Skincare" products={skincareProducts} setProducts={setSkincareProducts} />
    </div>
  );
};

export default AdminPage;
