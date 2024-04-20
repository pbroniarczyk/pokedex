import { NextResponse } from "next/server";

import connect from "@/lib/db";

export async function GET(request: Request) {
  try {
    return await connect().then((response) => {
      console.log(response);

      return NextResponse.json({ msg: "Hello from server" });
    });
  } catch (error) {
    throw new Error("Error in API: " + error);
  }
}
