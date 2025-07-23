import jwt from 'jsonwebtoken';
import User from '@/models/User';
import dbConnect from './dbconnect';

export default async function authenticate(req) {
  await dbConnect();

  const token = req.cookies.get('token')?.value;

  if (!token) {
    throw new Error('Not authenticated');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw new Error('User not found');
    }

    return user; // return authenticated user object
  } catch (err) {
    throw new Error('Invalid token');
  }
}
