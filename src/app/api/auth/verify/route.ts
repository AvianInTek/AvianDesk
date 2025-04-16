import { decrypt, encrypt, encryptCode } from "@/lib/crypto";
import { getMongoClient } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
    return new Response(JSON.stringify({ success: false, message:  `Only POST Method is available!`}), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    var { id } = body;
    if (!id) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    id = await decrypt(id);
    const db = await getMongoClient();
    var temp = await db.collection('users').findOne({ _id: ObjectId.createFromHexString(id) });
    if (temp && temp.verify) {
      return new Response(JSON.stringify({ success: false, message: 'User already verified' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const result = await db.collection('users').updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { verify: true } });
    if (!result) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid id' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error saving user data:', error);
    return new Response(JSON.stringify({ success: false, message: `Something went wrong!` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}