// pages/api/hello.ts
import { getMongoClient } from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '@/types/response';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method === 'POST') {
    const { user } = req.body;
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid input' });
    }
    const db = await getMongoClient();
    var result = await db.collection('users').aggregate([
      { $match: { _id: new ObjectId(user) } },
      { $project: { _id: 1 } },
    ]).toArray();
    if (!result) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(201).json({ success: true, data: result });
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
