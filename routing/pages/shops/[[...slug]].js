import { useRouter } from 'next/router'
import React from 'react'

function animal() {
    const router = useRouter()
    const {slug=[]} = router.query
  return (
    <div>Shops Home Page {slug.length} :- {slug[0]} {slug[1]}</div>
  )
}

export default animal


// catch all routes.
// [...slug] will take all the routes /shops/12/1212/212   ///  /shops/ammimal
// [[...slug]] will take all the routes but it will also take the home route of /shops
