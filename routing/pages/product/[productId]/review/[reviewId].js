import { useRouter } from 'next/router'
import React from 'react'

function Review() {
    const router = useRouter()
    const { productId, reviewId } = router.query
  return (
    <div>review {reviewId} for product {productId}</div>
  )
}

export default Review

// for creating nesting in dynamic routes make a folder of [productId] and then follow the same structure of file SYSTEM.