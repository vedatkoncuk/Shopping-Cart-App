import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';
import { ShoppingCart, Trash2 } from 'lucide-react'; // İkonlar için

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  const isItemInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out flex flex-col h-[420px]">

      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-6">
        <img
          src={product?.image}
          alt={product?.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm border border-gray-100">
          <span className="text-sm font-bold text-gray-900">${product?.price}</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h1 className="text-gray-800 font-semibold text-base line-clamp-2 min-h-[3rem] leading-tight mb-2 group-hover:text-red-600 transition-colors">
          {product?.title}
        </h1>

        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          {product?.category || "Electronics"}
        </p>
      </div>

      <button
        onClick={isItemInCart ? handleRemoveFromCart : handleAddToCart}
        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 ${isItemInCart
          ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-100'
          : 'bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-gray-300'
          }`}
      >
        {isItemInCart ? (
          <> <Trash2 size={18} /> Remove </>
        ) : (
          <> <ShoppingCart size={18} /> Add to Cart </>
        )}
      </button>
    </div>
  );
}

export default ProductTile;
