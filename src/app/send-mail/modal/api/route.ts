import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { File } from "buffer";
import { writeFile } from "fs/promises";

const mail = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const NAME = data.get("NAME");
    const EMAIL = data.get("EMAIL");
    const SERVICE = data.get("THEME");

    // Use getAll to get an array of files
    const files: File[] = data.getAll("FILE") as unknown as File[];
    if (!files || files.length === 0) {
        return NextResponse.json({ success: false });
    }

    const attachments = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `/tmp/${file.name}`;

        try {
            await writeFile(path, buffer);
            attachments.push({
                filename: file.name,
                path: path,
            });
        } catch (error) {
            console.error("Error writing file:", error);
            return NextResponse.json({ success: false });
        }
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mail,
            pass: pass,
        },
    });

    const mailOptions = {
        from: mail,
        to: mail,
        subject: `AKATA-WEBSITE | ${SERVICE} project requirement from ${NAME}`,
        html: `
            <div>
                <p> 
                    Hi, this is an email from <b>${NAME}</b> - <i>${EMAIL}</i>, who wants to talk about <b>${SERVICE}</b>                
                </p>            
            </div>`,
        attachments: attachments,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false });
    }
}
