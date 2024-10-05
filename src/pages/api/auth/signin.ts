
import { encryptCode } from '@/lib/crypto';
import { getMongoClient } from '@/lib/mongodb';
import { Signin } from '@/types/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body as Signin;
      if (!email || !password) {
        return res.status(400).json({ message: 'Invalid input' });
      }
      const db = await getMongoClient();
      var hashPassword = await encryptCode(password);
      const result = await db.collection('users').findOne({
        email: email,
        password: hashPassword
      });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      if (!result.verify) {
        return res.status(401).json({ success: false, message: 'Email not verified' });
      }
      return res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ success: false });
    }
  } else {
    // If it's not a POST request, return a method not allowed response
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
