import React, { useState, useEffect, FunctionComponent } from 'react'
import Product from '@components/Product'

const HomePage: FunctionComponent = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await window.fetch('api/avo')
        const { data } = await response.json()
        setProducts(data)
      } catch (error) {
        setProducts([])
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="main">
      <h1>Next.js!</h1>
      {products?.map((product, key) => (
        <div key={key}>
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            sku={product.sku}
          />
        </div>
      ))}
      <style jsx>{`
        .main {
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default HomePage
