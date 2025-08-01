
import User from '@/models/User';
import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return Response.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
