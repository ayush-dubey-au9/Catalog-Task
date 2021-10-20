import React, { useState, useEffect } from 'react';


const Products = ({ products, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }


return (
    <div>
      <div className='item-container'>
        {products.map(product  => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;