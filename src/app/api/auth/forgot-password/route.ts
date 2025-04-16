import { encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";

export async function GET(request: Request) {
  return new Response(JSON.stringify({ success: false, message:  `Only POST Method is available!` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
  });
}

    
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return new Response(JSON.stringify({ success: false, message: 'Email is needed..' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const db = await getMongoClient();
    var result = await db.collection('users').findOne({
      email: email
    });
    if (!result) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    var result1 = await db.collection('otDump').insertOne({
      email: email,
      code: encryptCode(email),
      createdAt: new Date()
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error saving user data:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}