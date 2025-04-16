import { encrypt, encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";

export async function GET(request: Request) {
    return new Response(JSON.stringify({ success: false, message:  `Only POST Method is available!`}), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;
        if (!name || !email || !password) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid input' }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
        }
         const db = await getMongoClient();
         var hashPassword = await encryptCode(password);
         var result;
         result = await db.collection('users').findOne({
           email: email,
         });
         if (result) {
            return new Response(JSON.stringify({ success: false, message: 'Email already exists' }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
         }
         result = await db.collection('users').insertOne({
           name: name,
           email: email,
           password: hashPassword,
           createdAt: new Date(),
         });
         if (!result) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid id' }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
         }
         var id = await encrypt(result.insertedId.toString());
        //  var quo = await sendVerificationEmail(name, email, id);
        //  if (!quo) {
        //     await db.collection('users').deleteOne({ _id: result.insertedId });
        //     return new Response(JSON.stringify({ success: false, message: 'Error sending email' }), {
        //         status: 201,
        //         headers: { 'Content-Type': 'application/json' }
        //     });
        //  }
         return new Response(JSON.stringify({ success: true }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error saving user data:', error);
        return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}