import { cookies } from "next/headers";

   
export async function GET(request: Request) {
  try {
    cookies().delete('session');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    // res.setHeader('Set-Cookie', `session=${session}; HttpOnly; Secure; Expires=${expiresAt.toUTCString()}; SameSite=Lax; Path=/`);

  } catch (error) {
    console.error('Error during signout data:', error);
    return new Response(JSON.stringify({ success: false, message: `Something went wrong.` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}