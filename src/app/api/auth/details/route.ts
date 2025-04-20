import { decrypt, encrypt, encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";
import { decryptSession } from "@/lib/session";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const sessionCookie = cookies().get('session');
  if (sessionCookie) {
    const session = sessionCookie.value;
    const decryptedSession = await decryptSession(session);
    if (!decryptedSession) {
      return NextResponse.json({ success: false, message: "failed to fetch." }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (decryptedSession && typeof decryptedSession.token === 'string') {
      var data = await decrypt(decryptedSession.token);
      const db = await getMongoClient();
      const check = await db.collection('users').findOne({ _id: new ObjectId(data) });
      if (!check) {
        return NextResponse.json({ success: false, message: "Invalid session token." }, {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const ticketStats = await db.collection('tickets').aggregate([
        { $match: { user: data } },
        {
          $group: {
            _id: null,
            totalTickets: { $sum: 1 },
            closedTickets: {
              $sum: {
                $cond: [{ $eq: ["$status", "closed"] }, 1, 0]
              }
            }
          }
        }
      ]).toArray();

      check.tickets = ticketStats[0]?.totalTickets || 0;
      check.closedTickets = ticketStats[0]?.closedTickets || 0;
      return NextResponse.json({ success: true, details: check }, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      console.log('Invalid decrypted session or token');
      return NextResponse.json({ success: false, message: "Invalid session token." }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    console.log('No session cookie found');
    return NextResponse.json({success: false, message: "User has not logged in."}, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
