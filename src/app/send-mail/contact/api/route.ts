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
                    Hi, this is an email from <b> ${NAME} </b> - <i>${EMAIL}</i><br> <br>
                    <b>Subject: </b> ${SUBJECT}
                </p>
                <p>
                    <b>This is his message: <br> </b>        
                    ${MESSAGE}
                </p>
                <small>Akata Goavana, Website 3.0</small>
            </div>`
    }
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({success : true})
    } catch (error) {
        return NextResponse.json({ success : false})
    }
}