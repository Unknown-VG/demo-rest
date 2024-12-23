import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, updateProductQuantity } from '../redux/cartSlice';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('user_id') || `guest-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    setQuantity(1); // Default quantity set to 1 on product details page load
  }, [product]);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addProductToCart({ product: productWithQuantity, user_id }));

    // Optionally, update cart in the backend
    // await api.addToCart(productWithQuantity, user_id);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Quantity Controls */}
      <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
