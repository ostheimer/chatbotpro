import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users: { email: string; password: string; firstName: string; lastName: string }[] = []; // Mock database

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const newUser = { email, password: hashedPassword, firstName, lastName };
    users.push(newUser);

    // Generate JWT
    const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });

    return res.status(201).json({ token });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 