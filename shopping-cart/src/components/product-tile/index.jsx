import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cart-slice';

function ProductTile({ product }) {

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <div className='group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-5 rounded-xl overflow-hidden'>

        <div className='w-full h-48 overflow-hidden flex justify-center items-center'>
          <img
            src={product?.image}
            alt={product?.title}
            className='max-h-full max-w-full object-contain'
          />
        </div>

        <h1 className='w-40 text-lg font-semibold text-center mt-8 truncate '>{product?.title}</h1>

        <button onClick={handleAddToCart} className='mt-auto w-full bg-red-950 text-white rounded-lg px-4 py-2.5 font-semibold 
        transition-all duration-300 transform active:scale-95
        hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/30
        flex items-center justify-center gap-2'>
          <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductTile
