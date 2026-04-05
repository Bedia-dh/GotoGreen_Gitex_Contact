import { NextResponse } from "next/server";

export function GET() {
  const target =
    process.env.CALENDLY_DEMO_URL ||
    process.env.CALENDLY_URL ||
    "https://calendly.com";

  try {
    return NextResponse.redirect(new URL(target), 302);
  } catch {
    return NextResponse.json(
      { error: "Invalid CALENDLY_DEMO_URL configuration" },
      { status: 500 },
    );
  }
}
