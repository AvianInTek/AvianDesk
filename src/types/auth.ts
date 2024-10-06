import { JWTPayload } from "jose";

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Signin {
    email: string;
    password: string;
}


export interface Session extends JWTPayload {
  token: string;
  expiresAt: Date;
}