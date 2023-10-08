import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Events({eventsList}) {
    const [events, setEvents] = useState(eventsList)
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, {shallow: true});
    }

  return (
    <>
        <div>Event List</div>
        <button onClick={fetchSportsEvents}>Sports Filter</button>
        {
            events.map(event => {
                return (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default Events

export async function getServerSideProps(context) {
    const { category } = context.query; 
    const queryString = category ? `category=${category}` : '';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();
    return {
        props: {
            eventsList: data
        }
    }
}