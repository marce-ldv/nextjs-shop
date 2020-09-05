import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query } = useRouter()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (query.id) {
          const resposne = await window.fetch('api/avo/query')
          const { data } = await resposne.json()
          setProduct(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [])

  return (
    <section>
      <h1>Página producto: {query?.id}</h1>
      <div>name: {product?.name}</div>
    </section>
  )
}

export default ProductPage
