import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer"

const mail = process.env.MAIL_USER
const pass = process.env.MAIL_PASSWORD
export async  function POST(req: NextRequest) {
    const {EMAIL, SUBJECT, MESSAGE, NAME} = await req.json();
    const transporter  = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mail,
            pass: pass
        }
    })

    const mailOptions = {
        from: mail,
        to: mail,
        subject: `AKATA-WEBSITE |  ${SUBJECT} from ${NAME}`,
        html: `
            <div>
                <p> 
                    Hi, this is an email from <b>${NAME}</b> - <i>${EMAIL}</i><br>
                    you have an email from  who asked for ${SUBJECT}
                </p>
                <p>
                    <b>This is his message: <br> </b>        
                    ${MESSAGE}
                </p>
            </div>`
    }
    try {
        await transporter.sendMail(mailOptions);
        console.log("mail-sent")
        return NextResponse.json({"message" : "your mail is sent successfully"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({"error" : error})
    }
}