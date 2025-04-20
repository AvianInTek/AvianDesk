import { decrypt } from "@/lib/crypto";
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
      var tickets;
      if (check.admin) {
        tickets = await db.collection('tickets').find({ user: data, status: { $in: ['open', 'ignore'] } }).toArray();
      } else {
        tickets = await db.collection('tickets').find({ user: data }).toArray();
      }
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
        return NextResponse.json({ success: false, message: "No tickets found." }, {
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
          tags: ticket.tags,
          status: ticket.status,
        };
      });
      return NextResponse.json({ success: true, tickets: ticketData }, {
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

     
export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { subject, description, attachment, problem, product, files } = body;
    const db = await getMongoClient();
    const sessionCookie = cookies().get('session');
    if (!sessionCookie) {
      return NextResponse.json({ success: false, message: "User session is not available." }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const session = sessionCookie.value;
    const decryptedSession = await decryptSession(session);
    if (!decryptSession) {
      return NextResponse.json({ success: false, message: "failed to fetch." }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (decryptedSession && typeof decryptedSession.token === 'string') {
      var data = await decrypt(decryptedSession.token);
      var result = await db.collection('tickets').insertOne({
        subject: subject,
        description: description,
        attachment: attachment,
        problem: problem.toLowerCase(),
        product: product.toLowerCase(),
        user: data,
        files: files,
        status: 'open',
        createdAt: new Date(),
      });
      if (!result) {
         return NextResponse.json({ success: false, message: 'Invalid id' }, {
             status: 401,
             headers: { 'Content-Type': 'application/json' }
         });
      }
      return NextResponse.json({ success: true }, {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return NextResponse.json({ success: false, message: "Invalid session token." }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
}

