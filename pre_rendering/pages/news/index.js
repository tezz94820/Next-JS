import React from 'react'

function NewsList({articles}) {
  return (
    <div>
        <h1>List of News</h1>
        {
            articles.map( article => {
                return (
                    <div key={article.id}>
                        {article.id} {article.title} | {article.category}
                    </div>
                )
            })
        }
    </div>
  )
}

export default NewsList


export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return {
        props : {
            articles : data
        }
    }

}