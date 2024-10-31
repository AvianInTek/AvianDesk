import { encrypt, encryptCode } from '@/lib/crypto';
import { getMongoClient } from '@/lib/mongodb';
import { encryptSession } from '@/lib/session';
import { Signin } from '@/types/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Invalid input' });
      }
      const db = await getMongoClient();
      var hashPassword = await encryptCode(password);
      console.log(password, hashPassword);
      const result = await db.collection('users').findOne({
        email: email
      });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
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
