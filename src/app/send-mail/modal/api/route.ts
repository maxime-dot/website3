// Your original file (e.g., api/sendEmailWithAttachments.ts)
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/app/services/emailServices";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const NAME = data.get("NAME");
    const EMAIL = data.get("EMAIL");
    const SERVICE = data.get("SERVICE");

    const files: File[] = data.getAll("FILE") as unknown as File[];
    const result = await sendEmail({NAME, EMAIL, SERVICE, files});

    if (result.success) {
      return NextResponse.json({success: true});
    } else {
      return NextResponse.json({success: false});
    }
  } catch (error) {
    return NextResponse.json({success: false});
  }
}
