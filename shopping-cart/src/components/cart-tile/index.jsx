import React from 'react';
import { removeFromCart } from '../../store/slices/cart-slice';
import { useDispatch } from 'react-redux';

function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 mt-4 h-32 w-full">

      <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 p-2 bg-gray-50 flex items-center justify-center">
        <img
          src={cartItem?.image}
          className="max-w-full max-h-full object-contain pointer-events-none"
          alt={cartItem?.title}
        />
      </div>

      <div className="flex flex-col justify-center flex-grow min-w-0 h-full">
        <h1 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-1">
          {cartItem?.title}
        </h1>
        <p className="text-lg font-bold text-red-600 mt-1">
          ${cartItem?.price}
        </p>
      </div>

      <div className="flex-shrink-0 ml-auto">
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-bold transition-colors border border-red-100"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartTile;
