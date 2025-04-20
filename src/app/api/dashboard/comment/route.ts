import { decrypt } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";
import { decryptSession } from "@/lib/session";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticketId = searchParams.get('ticketId');
  if (!ticketId) {
    return NextResponse.json({ success: false, message: "ticketId is required." }, {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

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
      const ticket = await db.collection('tickets').findOne({ _id: new ObjectId(ticketId) });
      if (!ticket) {
        return NextResponse.json({ success: false, message: "Invalid ticket id." }, {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      const comments = await db.collection('comments').find({ ticket: ticketId }).sort({ order: 1 }).toArray();
      if (!comments) {
        return NextResponse.json({ success: false, message: "No comment found." }, {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      for (const comment of comments) {
        comment.createdAt = new Date(comment.createdAt).toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
        const user = await db.collection('users').findOne(
          { _id: new ObjectId(comment.user) },
          { projection: { name: 1, _id: 1 } }
        );
        comment.user = user;
      }
      return NextResponse.json({ success: true, comments: comments }, {
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
    const { comment, ticketId } = body;
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
      
      const ticket = await db.collection('tickets').findOne({ _id: new ObjectId(ticketId) });
      if (!ticket) {
        return NextResponse.json({ success: false, message: "Invalid ticket id." }, {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      if (ticket.status === 'closed') {
        return NextResponse.json({ success: false, message: "Ticket is closed." }, {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      var finder = await db.collection('comments').find({ ticket: ticket }).toArray();
      var result = await db.collection('comments').insertOne({
        comment: comment,
        ticket: ticket,
        user: data,
        order: finder.length + 1,
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