import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../redux/cartSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const user_id = localStorage.getItem('user_id') || `guest-${Math.random().toString(36).substr(2, 9)}`;

  const handleAddToCart = async (product) => {
    const productWithQuantity = { ...product, quantity: 1 };

    // Dispatch to add the product to cart in Redux and make API call to backend if necessary
    dispatch(addProductToCart({ product: productWithQuantity, user_id }));

    // Make API call to update cart in backend if required
    // await api.addToCart(productWithQuantity, user_id);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>

          {/* Add to Cart Button */}
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
