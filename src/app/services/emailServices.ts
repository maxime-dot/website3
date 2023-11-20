import nodemailer from "nodemailer";
import {writeFile} from "fs/promises";
import {File} from "buffer";


const mail = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: mail,
        pass: pass,
    },
});

export async function sendEmail({EMAIL, SUBJECT, MESSAGE, NAME}: any) {
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
      </div>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {success: true};
    } catch (error) {
        return {success: false, error};
    }
}

export async function sendEmailWithAttachments({
                                                   NAME,
                                                   EMAIL,
                                                   SERVICE,
                                                   files,
                                               }: {
    NAME: string;
    EMAIL: string;
    SERVICE: string;
    files: File[];
}) {
    const attachments = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `./src/upload/${EMAIL}-${file.name}`;

        try {
            await writeFile(path, buffer);
            attachments.push({
                filename: file.name,
                path: path,
            });
        } catch (error) {
            throw new Error("Error saving file");
        }
    }

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
        return {success: true};
    } catch (error) {
        throw new Error("Error sending email");
    }
}
