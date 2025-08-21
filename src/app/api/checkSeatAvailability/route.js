import axios from 'axios';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const classType = searchParams.get('classType'); // Default to Sleeper class if not provided
    const quota = searchParams.get('quota') || 'GN'; // Default to General Quota if not provided
    const train_number = searchParams.get('trainNo') || ''; // Default to empty string if not provided
    const fromStation = searchParams.get('src');
    const toStation = searchParams.get('dstn');
    const date= searchParams.get('date');

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        params: {
            classType: classType,
            fromStationCode: fromStation,
            quota: quota,
            toStationCode: toStation,
            trainNo:train_number,
            dateOfJourney: date,
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
