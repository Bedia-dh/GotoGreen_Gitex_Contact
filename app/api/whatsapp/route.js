import { NextResponse } from "next/server";

export function GET() {
  const target = process.env.WHATSAPP_URL || "https://wa.me";

  try {
    return NextResponse.redirect(new URL(target), 302);
  } catch {
    return NextResponse.json(
      { error: "Invalid WHATSAPP_URL configuration" },
      { status: 500 },
    );
  }
}
