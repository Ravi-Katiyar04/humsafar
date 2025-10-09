import axios from 'axios';

export async function GET(req) {
    const searchParams = new URL(req.url).searchParams;
    const stnCode = searchParams.get('stationCode');

    console.log('Received PNR Number:', pnrNumber);

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
        params: { stationCode: stnCode },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
        },
    };

    try {
        const response = await axios.request(options);
        return Response.json(response.data);
    } catch (error) {
        console.error('Train Status Error:', error);
        return Response.json({ error: 'pnr not found or no data available.' }, { status: 500 });
    }
}
