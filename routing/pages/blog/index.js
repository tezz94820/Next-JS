import Link from 'next/link'
import React from 'react'

function blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <Link href="/">Link to Home Page</Link>
    </div>
  )
}

export default blog



// Nested routes can be made by creating the folder inside pages folder. and homepage of that folder should be named index.js filename 