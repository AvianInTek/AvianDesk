import { cookies } from "next/headers";
import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';

   
export async function GET(request: Request) {
  try {
    cookies().delete('session');
    return NextResponse.json({ success: true }, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    // res.setHeader('Set-Cookie', `session=${session}; HttpOnly; Secure; Expires=${expiresAt.toUTCString()}; SameSite=Lax; Path=/`);

  } catch (error) {
    console.error('Error during signout data:', error);
    return NextResponse.json({ success: false, message: `Something went wrong.` }, {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}