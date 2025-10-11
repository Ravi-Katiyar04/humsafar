import axios from 'axios';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const trainNumber = searchParams.get('trainNumber');
    const startDay = searchParams.get('startDay') || '0';

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus',
        params: {
            trainNo: trainNumber,
            startDay: startDay
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
        console.log(response.data)
        return Response.json(response.data, { status: 200 });
    } catch (error) {
        console.error('Train Status Error:', error);
        return Response.json({ error: 'Train not found or no data available.' }, { status: 500 });
    }
}
