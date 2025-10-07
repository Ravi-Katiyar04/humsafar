import axios from 'axios';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const fromStation = searchParams.get('src');
    const toStation = searchParams.get('dstn');
    const dateOfJourney = searchParams.get('date');

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        params: {
            fromStationCode: fromStation,
            toStationCode: toStation,
            dateOfJourney: dateOfJourney,
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
        },
    };

    try {
        const response = await axios.request(options);
        if (!response.data || response.data.length === 0) {
            return Response.json({ error: 'Train not found or no data available.' }, { status: 404 });
        }
        return Response.json(response.data, { status: 200 });
    } catch (error) {
        console.error('Train Status Error:', error);
        return Response.json({ error: 'Train not found or no data available.' }, { status: 500 });
    }
}
