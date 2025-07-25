import { serialize } from 'cookie';

export async function POST() {
  return new Response(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: {
      'Set-Cookie': serialize('token', '', {
        path: '/',
        maxAge: 0,
      }),
      'Content-Type': 'application/json',
    },
  });
}
