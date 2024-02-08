import React from 'react';
import './ProductList.css';

const ProductList = (props) => {
  const handleDeleteProduct = (index) => {
    const updatedProducts = props.products.filter((_, i) => i !== index);
    if(updatedProducts.length===0){
      localStorage.removeItem(props.category);
      props.setProducts(updatedProducts);
    }else{
      localStorage.setItem(props.category, JSON.stringify(updatedProducts));
    props.setProducts(updatedProducts);
    }
  };

  return (
    <div className="product-list-container">
      <h3>{props.category} Products</h3>
      <ul>
        {props.products.map((product, index) => (
          <li key={index}>
            <span>{product.productName} - {product.sellingPrice}</span>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
