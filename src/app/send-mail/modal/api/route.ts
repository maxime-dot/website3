import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {File} from "buffer";
import {writeFile} from "fs/promises";

const mail = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;

export async function POST(req: NextRequest) {
    const data = await req.formData()
    const NAME = data.get("NAME")
    const EMAIL = data.get("EMAIL")
    const SERVICE = data.get("THEME")
    const file: File | null = data.get("FILE") as unknown as File;
    if (!file) {
        return NextResponse.json({success: false});
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `/tmp/${file.name}`;
    await writeFile(path, buffer);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mail,
            pass: pass,
        },
    });

    // Create an array to store attachments


    const mailOptions = {
        from: mail,
        to: mail,
        subject: `AKATA-WEBSITE | ${SERVICE} project requirement from ${NAME}`,
        html: `
      <div>
        <p> 
          Hi, this is an email from <b> ${NAME} </b> - <i> ${EMAIL} </i>, who wants to talk about  <b>${SERVICE} </b>                
        </p>            
      </div>`,
        attachments: [
            {
                filename: file.name,
                path: path
            }
        ]
    };
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({success: false});
    }
}
