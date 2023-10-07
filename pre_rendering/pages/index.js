import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Next-JS pre-rendering pages</h1>
      <br />
      <Link href='/users'>navigate to User list </Link><br />
      <Link href='/posts'>navigate to Posts </Link>

    </>
  )
}
