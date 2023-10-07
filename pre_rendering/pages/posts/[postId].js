import { useRouter } from 'next/router';
import React from 'react'

function Post({post}) {

  const router = useRouter();

  if(router.isFallback){
    return <h1>Loading....... </h1>
  }
  return (
    <div>
        <h1>{post.id} {post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post

// here the postId was variable and can be anything. nextjs says that you have to define what can be the possible values of postId
export async function getStaticPaths() {
    // if we want all 100 posts html to be created we need to tell nextjs that there are 100 postId
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // to return a 100 postId in specific format.
    const paths = data.map( post => {
        return {
            params : {postId: `${post.id}`}
        }
    })
    
    return {
        paths: [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ],
        // paths : paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
  const { params } = context //this gives us the access to query and params in url
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()

  // if fallback is set to true, that means you can enter any path and you will not get notfound error.then
  // if such a id is put wich is not present . then return notfound page by this
  if(!data.id){
    return {
      notFound : true
    }
  }
  
  console.log("generating paths for ",params.postId)

  return {
    props : {
        post : data
    }
  }
}