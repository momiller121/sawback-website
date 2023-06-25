import type { PageServerLoad } from './$types';
import trips from '$lib/data/trips.json';


export const load = (async ({ params }) => {

    const tripResult = trips.filter(t => t.slug === params.trip_id);
    return {
        trip: trips.length > 0 ? tripResult[0] : null
    }
}) satisfies PageServerLoad;