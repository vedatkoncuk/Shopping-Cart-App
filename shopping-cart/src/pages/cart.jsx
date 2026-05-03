import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTile from '../components/cart-tile';

function Cart() {
  const [totalCart, setTotalCart] = useState(0);


  const { cart } = useSelector(state => state)

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  console.log(cart, totalCart)

  return (
    <div className='flex justify-center'>

      {
        cart && cart.length ? (
          <>

            <div className='min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto '>
              <div className=' flex flex-col justify-center items-center p-3'>
                {
                  cart.map(cartItem => <CartTile cartItem={cartItem} />)
                }
              </div>

            </div>

            <div className='w-[300]'>

              <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14 '>
                <h1 className='font-bold text-lg text-red-800'>
                  Your Cart Summary
                </h1>
                <p>
                  <span className='text-gray-800 font-bold'>Total Items</span>
                  <span> :{cart.length}</span>
                </p>

                <p>
                  <span className='text-gray-800 font-bold'>Total Amount</span>
                  <span> :{totalCart}</span>
                </p>

              </div>
            </div>

          </>
        ) : <div className='min-h-[80vh] flex flex-col items-center justify-center'>
          <h1 className='text-gray-800 font-bold text-xl mb-2'>Your Cart İs Empty</h1>
          <Link to="/">
            <button className='mt-auto w-full bg-red-950 text-white rounded-lg px-4 py-2.5 font-semibold 
          transition-all duration-300 transform active:scale-95
          hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/30
          flex items-center justify-center gap-2'>
              SHOP NOW
            </button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart