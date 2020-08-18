import React from 'react'
import { useRouter } from 'next/router';

const ProductItem = () => {
  const { query: { productId } } = useRouter();
  return (
    <div>
      Esto es un item del producto: {productId}
    </div>
  )
}

export default ProductItem
