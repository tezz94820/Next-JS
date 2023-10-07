import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/product');
    // router.replace('/product'); // this will do the same as replace all history and drop the user at home page.
  }
  
    return (
    <div>
      <h1>Welcome Home</h1>
      <Link href='/blog'>Blog</Link><br/>
      <Link href='/product'>Products</Link>
      <button onClick={handleClick}>Place Order</button>

    </div>
  )
}

export default Home



// Index is the homepage of app