export async function GET(request: Request) {
    return new Response(JSON.stringify({success: true}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
}

// import { NextRequest } from 'next/server';
// import { cookies, headers } from 'next/headers';

// export async function GET(request: NextRequest) {
//   // 1. Using 'next/headers' helpers
//   const cookieStore = await cookies();
//   const token = cookieStore.get('token');

//   const headersList = await headers();
//   const referer = headersList.get('referer');

//   // 2. Using the standard Web APIs
//   const userAgent = request.headers.get('user-agent');

//   return new Response(JSON.stringify({ token, referer, userAgent }), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
    
export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;
    
    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };
    
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
}