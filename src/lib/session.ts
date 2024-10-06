

import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { Session } from '@/types/auth'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encryptSession(payload: Session) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decryptSession(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}
 
 
// export async function updateSession() {
//   const session = cookies().get('session')?.value
//   const payload = await decryptSession(session)
 
//   if (!session || !payload) {
//     return null
//   }
 
//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
//   cookies().set('session', session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: 'lax',
//     path: '/',
//   })
// }

// export function deleteSession() {
//     cookies().delete('session')
// }

// export const verifySession = async () => {
//   const cookie = cookies().get('session')?.value
//   const session = await decryptSession(cookie)
//   if (!session?.token || typeof session?.token !== 'string') {
//     return false;
//   }
//   var decry = await decrypt(session.token)
//   if (!decry) {
//     return false;
//   }
//   const db = await getMongoClient();
//   var check = await db.collection('users').findOne({ _id: ObjectId.createFromHexString(decry) });
//   console.log(check)
//   if (!check) {
//     return false;
//   }
//   return true;
// }


// export const verifySession = async (cookie: string) => {
//   const session = await decryptSession(cookie);
//   if (!session?.token || typeof session?.token !== 'string') {
//     return false;;
//   }
//   const decry = await decrypt(session.token);
//   if (!decry) {
//     return false;;
//   }
//   const db = await getMongoClient();
//   const check = await db.collection('users').findOne({ _id: new ObjectId(decry) });
//   console.log(check);
//   if (!check) {
//     return false;;
//   }
//   return true;
// };

