import { NextRequest, NextResponse } from "next/server";

const VARIANT_COOKIE_KEY = "lp_membership_variant";

function getRandomVariant(): "a" | "b" {
  return Math.random() < 0.5 ? "a" : "b";
}

function parseVariant(value: string | null): "a" | "b" | null {
  if (value === "a" || value === "b") return value;
  return null;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/lp/membership") {
    return NextResponse.next();
  }

  const requestedVariant = parseVariant(request.nextUrl.searchParams.get("variant"));
  const cookieVariant = parseVariant(request.cookies.get(VARIANT_COOKIE_KEY)?.value ?? null);
  const resolvedVariant = requestedVariant ?? cookieVariant ?? getRandomVariant();

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = resolvedVariant === "a" ? "/lp/membership-a" : "/lp/membership-b";
  rewriteUrl.searchParams.delete("variant");

  const response = NextResponse.rewrite(rewriteUrl);
  if (cookieVariant !== resolvedVariant) {
    response.cookies.set(VARIANT_COOKIE_KEY, resolvedVariant, {
      path: "/lp",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return response;
}

export const config = {
  matcher: ["/lp/membership"],
};
