import React from 'react'
import { useRouter } from 'next/router'

function ProductList() {

    const router = useRouter();
    const productId = router.query.productId // this is done to find the productId which is passed in url.

  return (
    <div> This is product {productId}</div>
  )
}

export default ProductList