import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementProductQuantity, decrementProductQuantity } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleIncrement = (productId) => {
    dispatch(incrementProductQuantity({ productId, user_id: cart.user_id, cart }));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementProductQuantity({ productId, user_id: cart.user_id, cart }));
  };

  return (
    <div>
      {cart?.products?.map((product) => (
        <div key={product.id} className="cart-item">
          <span>{product.name}</span>
          <div>
            <button onClick={() => handleDecrement(product.id)} disabled={product.quantity <= 1}>
              -
            </button>
            <span>{product.quantity}</span>
            <button onClick={() => handleIncrement(product.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
