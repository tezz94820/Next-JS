import useSWR  from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
}

function DashboardSWR() {

    const { data, error } = useSWR( 'dashboard', fetcher);
    
    if(error) return 'an errro has occured';
    if(!data) return '<h1>Loading...</h1>'

    return (
        <div>
            <h1>Dashboard</h1> <br/>
                Posts - {data.posts} <br/>
                Likes - {data.likes} <br/>
                Followers - {data.followers} <br/>
                Following - {data.following}
        </div>
    )

}

export default DashboardSWR