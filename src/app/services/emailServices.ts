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

interface EmailParameters {
  EMAIL: FormDataEntryValue;
  SUBJECT: FormDataEntryValue;
  MESSAGE: FormDataEntryValue;
  NAME: FormDataEntryValue;
  SERVICE?: FormDataEntryValue;
  files: File[];
}

export async function sendEmail({
  EMAIL,
  SUBJECT = "Send Project Requirement",
  MESSAGE,
  NAME,
  SERVICE = "Project Requirement",
  files,
}: any) {
  const attachments = [];

  if (files) {
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
  }
  const mailOptions = {
    from: mail,
    to: mail,
    subject: `AKATA-WEBSITE |  ${SUBJECT} from ${NAME}`,
    html: `
      <div>
        <p>
          Hi, this is an email from <b> ${NAME} </b> - <i>${EMAIL}</i>
           who wants to talk about <b>${SERVICE}</b <br> <br>
          <b>Subject: </b> ${SUBJECT}
        </p>
        <p>
          ${MESSAGE ? "<b>This is his message: <br> </b>" : ""} 
          ${MESSAGE ? MESSAGE : ""}
        </p>
        <small>Akata Goavana, Website 3.0</small>
      </div>`,
    attachments: attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {success: true};
  } catch (error) {
    console.log(error);
    return {success: false, error};
  }
}
