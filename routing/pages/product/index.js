import React from 'react'
import Link from 'next/link'

function Product({ productId = 100 }) {
  return (
    <div>
      <h1>Products Home Page</h1>
      <Link href="/">Link to Home Page</Link>

      <h2>
        <Link href='product/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='product/2'>Product 2</Link>
      </h2>
      <h2>
        <Link href='product/3' replace>Product 3</Link> 
      </h2>
      <h2>
        <Link href={`product/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  )
}

export default Product


//replace prop on product-3 will navigate the user to home page if he clicks back button