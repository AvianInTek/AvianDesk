
import { decrypt } from '@/lib/crypto';
import { getMongoClient } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      var { id } = req.body;
      if (!id) {
        return res.status(400).json({ success: false, message: 'Invalid input' });
      }
      id = await decrypt(id);
      const db = await getMongoClient();
      var temp = await db.collection('users').findOne({ _id: ObjectId.createFromHexString(id) });
      if (temp && temp.verify) {
        return res.status(400).json({ success: false, message: 'User already verified' });
      }
      const result = await db.collection('users').updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { verify: true } });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid id' });
      }
      return res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
