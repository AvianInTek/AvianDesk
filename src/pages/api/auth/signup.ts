
import { encrypt, encryptCode } from '@/lib/crypto';
import { sendVerificationEmail } from '@/lib/mail';
import { getMongoClient } from '@/lib/mongodb';
import { User } from '@/types/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body as User;
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Invalid input' });
      }
      const db = await getMongoClient();
      var hashPassword = await encryptCode(password);
      var result;
      result = await db.collection('users').findOne({
        email: email,
      });
      if (result) {
        return res.status(409).json({ success: false, message: 'Email already exists' });
      }
      result = await db.collection('users').insertOne({
        name: name,
        email: email,
        password: hashPassword,
        verify: false,
        createdAt: new Date(),
      });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid id' });
      }
      var id = await encrypt(result.insertedId.toString());
      var quo = await sendVerificationEmail(name, email, id);
      if (!quo) {
        await db.collection('users').deleteOne({ _id: result.insertedId });
        return res.status(500).json({ message: 'Error sending email' });
      }
      return res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    // If it's not a POST request, return a method not allowed response
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
