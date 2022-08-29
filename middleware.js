import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";

const middleware = async (request) => {
  const jwt = request.cookies.get("token");

  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (jwt) return NextResponse.next();

  // try {
  //   const verifiedJWT = await jwtVerify(
  //     jwt,
  //     new TextEncoder().encode("secret")
  //   );
  //   console.log("Valid Token");
  //   if (verifiedJWT) return NextResponse.next();
  // } catch (error) {
  //   console.error(error);
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // return NextResponse.next();
};

export const config = {
  matcher: [
    "/welcome",
    "/users/:path*",
    "/petProfile/:path*, /appointments, /",
  ],
};

export default middleware;
