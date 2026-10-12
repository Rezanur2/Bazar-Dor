
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
 
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  })

  const user = session?.user;
  if (!user) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("redirected", "1");
    return NextResponse.redirect(signInUrl);
  }
}
 
export const config = {
  matcher: ['/profile', '/product/:path'],
}