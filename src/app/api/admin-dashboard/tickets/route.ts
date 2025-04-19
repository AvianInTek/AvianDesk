import { decrypt } from "@/lib/crypto";
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

      if (!check.admin) {
        return new Response(JSON.stringify({ success: false, message: "User is not an admin." }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      const tickets = await db.collection('tickets').find({ user: data, status: { $in: ['open', 'ignore'] } }).toArray();
      const currentDate = new Date();
      tickets.forEach(ticket => {
        ticket.tags = [ticket.product, ticket.status, ticket.problem];
        const createdAt = new Date(ticket.createdAt);
        const oneWeekAgo = new Date(currentDate);
        oneWeekAgo.setDate(currentDate.getDate() - 7);
        if (createdAt < oneWeekAgo) {
          ticket.tags.push('ignore');
        }
      });
      if (!tickets) {
        return new Response(JSON.stringify({ success: false, message: "No tickets found." }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      const ticketData = tickets.map(ticket => {
        return {
          _id: ticket._id.toString(),
          user: check.name,
          subject: ticket.subject,
          description: ticket.description,
          attachment: ticket.attachment,
          files: ticket.files,
          createdAt: ticket.createdAt,
          tags: ticket.tags
        };
      });
      return new Response(JSON.stringify({ success: true, tickets: ticketData }), {
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
  
export async function POST(request: Request) {
  const body = await request.json();
  const { ticketId } = body;
  const db = await getMongoClient();
  const sessionCookie = cookies().get('session');
  if (!sessionCookie) {
    return new Response(JSON.stringify({ success: false, message: "User session is not available." }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  const session = sessionCookie.value;
  const decryptedSession = await decryptSession(session);
  if (!decryptSession) {
    return new Response(JSON.stringify({ success: false, message: "failed to fetch." }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  if (decryptedSession && typeof decryptedSession.token === 'string') {
    var data = await decrypt(decryptedSession.token);
    var user = await db.collection('users').findOne({ _id: new ObjectId(data) });
    if (!user) {
      return new Response(JSON.stringify({ success: false, message: "Invalid session token." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!user.admin) {
      return new Response(JSON.stringify({ success: false, message: "User is not an admin." }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    await db.collection('tickets').updateOne({ _id: new ObjectId(ticketId) }, { $set: { status: 'closed' } });
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } else {
    return new Response(JSON.stringify({ success: false, message: "Invalid session token." }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

