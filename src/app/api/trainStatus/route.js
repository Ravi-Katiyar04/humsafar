import axios from 'axios';

export async function GET(req) {
    const searchParams = new URL(req.url).searchParams;
    const trainNumber = searchParams.get('trainNumber') || searchParams.get('train_number');
    const departureDate = searchParams.get('departure_date') || searchParams.get('departure_date'); 
    // const today = new Date();
    // const yyyymmdd = today.toISOString().slice(0, 10).replace(/-/g, '');

    // console.log('Fetching train status for:', trainNumber, 'on date:', yyyymmdd);

    const options = {
        method: 'GET',
        url: 'https://indian-railway-irctc.p.rapidapi.com/api/trains/v1/train/status',
        params: {
            departure_date: departureDate,
            isH5: 'true',
            client: 'web',
            deviceIdentifier: 'Mozilla%20Firefox-138.0.0.0',
            train_number: trainNumber,
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
            'x-rapid-api': 'rapid-api-database'
        },
    };

    try {
        const response = await axios.request(options);
        return Response.json(response.data);
    } catch (error) {
        console.error('Train Status Error:', error);
        return Response.json({ error: 'Train not found or no data available.' }, { status: 500 });
    }
}
