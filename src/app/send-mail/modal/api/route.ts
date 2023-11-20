// Your original file (e.g., api/sendEmailWithAttachments.ts)
import { NextRequest, NextResponse } from "next/server";
import {sendEmailWithAttachments} from "@/app/services/emailServices";

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const NAME = data.get("NAME");
        const EMAIL = data.get("EMAIL");
        const SERVICE = data.get("THEME");

        const files: File[] = data.getAll("FILE") as unknown as File[];
        if (!files || files.length === 0) {
            return NextResponse.json({ success: false });
        }

        const result = await sendEmailWithAttachments({ NAME, EMAIL, SERVICE, files });

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false });
    }
}
