import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Called by the Prismic webhook on publish: refreshes the cached Prismic content.
// The webhook secret configured in Prismic must match PRISMIC_WEBHOOK_SECRET.
export async function POST(request: NextRequest) {
  const secret = process.env.PRISMIC_WEBHOOK_SECRET;
  const body = await request.json().catch(() => null);

  if (!secret || body?.secret !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Expire immediately: the next visit gets the published content
  revalidateTag("prismic", { expire: 0 });

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
