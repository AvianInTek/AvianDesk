// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
    success: boolean;
    data?: any;
    message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method === 'POST') {
    const data = req.body;
    res.status(201).json({ success: true, data });
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
