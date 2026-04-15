import { NextResponse } from "next/server";

function redirectToCitySensor(request: Request) {
  return NextResponse.redirect(new URL("/citysensor", request.url), 301);
}

export const GET = redirectToCitySensor;
export const HEAD = redirectToCitySensor;
