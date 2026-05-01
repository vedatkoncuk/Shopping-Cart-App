import React, { useEffect, useState } from 'react'
import ProductTile from '../components/product-tile';


function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    try {
      setLoading(true)
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return <div>
    {
      loading ? <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent">


        </div>
      </div>
        : <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3 gap-3'>
          {
            products && products.length ? products.map((productItem) => (<ProductTile product={productItem} />)) : null
          }
        </div>
    }
  </div>
}

export default Home