import { NextResponse } from "next/server";
import { getSession } from "@/lib/(user)/getSession";

// MIDDLEWARE FUNCTION THAT REDIRECTS TO LOGIN PAGE IF NO USER IS LOGGED

export async function middleware(request) {
  const session = await getSession(request.cookies ?? "");

  if (
    !session &&
    (request.nextUrl.pathname.startsWith("/account") ||
      request.nextUrl.pathname.startsWith("/accSettings") ||
      request.nextUrl.pathname.startsWith("/wishlist") ||
      request.nextUrl.pathname.startsWith("/blankconversation") ||
      request.nextUrl.pathname.startsWith("/conversationList") ||
      request.nextUrl.pathname.startsWith("/conversation") ||
      request.nextUrl.pathname.startsWith("/addPost") ||
      request.nextUrl.pathname.startsWith("/modifyPost") ||
      request.nextUrl.pathname.startsWith("/activePosts") ||
      request.nextUrl.pathname.startsWith("/inactivePosts"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    session &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
}

export const config = {
  matcher: [
    "/account",
    "/accSettings/:section*",
    "/addPost",
    "/modifyPost/:postId*",
    "/blankconversation/:postId*",
    "/conversation/:conversationId*",
    "/conversationList",
    "/activePosts",
    "/wishlist",
    "/login",
    "/register",
    "/inactivePosts",
  ],
};
