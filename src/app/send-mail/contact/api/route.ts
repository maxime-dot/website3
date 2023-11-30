// Your original file (e.g., api/sendEmail.ts)
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/services/emailServices";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const NAME = data.get("NAME");
    const EMAIL = data.get("EMAIL");
    const SUBJECT = data.get("SUBJECT");
    const MESSAGE = data.get("MESSAGE");

    const result = await sendEmail({NAME, EMAIL, SUBJECT, MESSAGE});
    if (result.success) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false});
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({success: false});
  }
}
