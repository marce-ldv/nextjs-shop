import React, { FunctionComponent } from 'react'
import Typography from 'components/Typography'

interface Props {
  id: string
  image?: string
  name: string
  price: number
  sku: string
  attributes?: Attributes
}

interface Attributes {
  description: string
  hardiness?: string
  shape: string
  taste: string
}

export const Product: FunctionComponent<Props> = (product: Props) => {
  return (
    <div className="container">
      <Typography>Image: {product?.image}</Typography>
      <Typography>Name: {product?.name}</Typography>
      <Typography>Price: {product?.price}</Typography>
      <Typography>Sku: {product?.sku}</Typography>
      <style jsx>{`
        .container {
          margin: 30px 0;
        }
      `}</style>
    </div>
  )
}

export default Product
