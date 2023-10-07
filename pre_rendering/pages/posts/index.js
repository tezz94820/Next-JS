import React from 'react'
import Link from 'next/link'


function posts({posts}) {
  return (
    <div>
        <h1>List of all posts</h1>
        {
            posts.map( post => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <h1>
                                {post.id} {post.title}
                            </h1>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default posts


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props : {
            posts:data.slice(0,3)
        }
    }
}