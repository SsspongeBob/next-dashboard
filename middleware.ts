export { auth as middleware } from "@/auth"
import { MiddlewareConfig } from "next/server";
import { NextResponse } from "next/server";

export const config: MiddlewareConfig = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// export async function middleware() {
//   return NextResponse.next()
// }