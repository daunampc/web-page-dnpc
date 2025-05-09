// lib/auth.ts
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { IUser } from "@/interface/user";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function getCurrentUser(): Promise<IUser | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("S-SESSION")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return {
      sub: payload.sub as string,
      user_id: payload.user_id as string,
      id: payload.sub as string,
      email: payload.email as string,
      name: payload.name as string,
      avatar: payload.avatar as string,
    };
  } catch {
    return null;
  }
}
