import { decrypt, encrypt, encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";
import { decryptSession } from "@/lib/session";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const sessionCookie = cookies().get('session');
  if (sessionCookie) {
    const session = sessionCookie.value;
    const decryptedSession = await decryptSession(session);
    if (!decryptedSession) {
      return new Response(JSON.stringify({ success: false, message: "failed to fetch." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (decryptedSession && typeof decryptedSession.token === 'string') {
      var data = await decrypt(decryptedSession.token);
      const db = await getMongoClient();
      const check = await db.collection('users').findOne({ _id: new ObjectId(data) });
      if (!check) {
        return new Response(JSON.stringify({ success: false, message: "Invalid session token." }), {
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
      return new Response(JSON.stringify({ success: true, details: check }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      console.log('Invalid decrypted session or token');
      return new Response(JSON.stringify({ success: false, message: "Invalid session token." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    console.log('No session cookie found');
    return new Response(JSON.stringify({success: false, message: "User has not logged in."}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
