import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer"

export async  function POST(req: NextRequest) {
    const {EMAIL, SUBJECT, MESSAGE} = await req.json();
    const data = {
        to: EMAIL,
        subject: SUBJECT,
        text: MESSAGE
    }
    console.log(data)
    const transporter  = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fitiavananalahatra@gmail.com",
            pass: "knsdkhbximfpsmhq"
        }
    })

    const mailOptions = {
        from: "fitiavananalahatra@gmail.com",
        to: EMAIL, subject: SUBJECT,text: MESSAGE
    }
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({"message" : "your mail is sent successfully"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({"error" : error})
    }
}