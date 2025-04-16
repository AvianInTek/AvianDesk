import { encrypt, encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";
import { encryptSession } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  return new Response(JSON.stringify({success: false, message: `Only POST Method is available!`}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

   
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const db = await getMongoClient();
    var hashPassword = await encryptCode(password);
    const result = await db.collection('users').findOne({
      email: email,
      password: hashPassword
    });
    if (!result) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    // if (!result.verify) {
    //   return new Response(JSON.stringify({ success: false, message: 'Email not verified.' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' }
    //   });
    // }
    /** Session */
    var encry = await encrypt(result._id.toString());
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encryptSession({ token: encry, expiresAt });
    cookies().set('session', session, { path: '/', httpOnly: false });
    return new Response(JSON.stringify({ success: true, session: session }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    // res.setHeader('Set-Cookie', `session=${session}; HttpOnly; Secure; Expires=${expiresAt.toUTCString()}; SameSite=Lax; Path=/`);

  } catch (error) {
    console.error('Error saving user data:', error);
    return new Response(JSON.stringify({ success: false, message: `Something went wrong.` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}