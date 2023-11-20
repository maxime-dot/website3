// Your original file (e.g., api/sendEmail.ts)
import { NextRequest, NextResponse } from "next/server";
import {sendEmail} from "@/app/services/emailServices";

export async function POST(req: NextRequest) {
    const { EMAIL, SUBJECT, MESSAGE, NAME } = await req.json();

    const result = await sendEmail({ EMAIL, SUBJECT, MESSAGE, NAME });

    if (result.success) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false });
    }
}
