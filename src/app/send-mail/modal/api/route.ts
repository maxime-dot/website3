import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

const mail = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;

export async function POST(req: NextRequest) {
    const {EMAIL, SERVICE, FILE, NAME} = await req.json();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mail,
            pass: pass,
        },
    });

    // Create an array to store attachments
    const files = FILE.map((file, index) => ({
        filename: file.path,
        path: file.path
    }));


    console.log("files", FILE)
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
        attachments: files

    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("mail-sent");
        return NextResponse.json({message: "Your mail is sent successfully"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error});
    }
}
