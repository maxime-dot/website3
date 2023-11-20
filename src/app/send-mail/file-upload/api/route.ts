import { NextApiRequest, NextApiResponse } from 'next';
import fs, {writeFile} from 'fs/promises';
import path from 'path';
import {NextRequest, NextResponse} from "next/server";
import {File} from "buffer";

export  async function POST(req: NextRequest) {
    // const { NAME, EMAIL, THEME, FILE } = await req.json();
    //     try {
    //
    //         console.log(NAME)
    //         console.log(EMAIL)
    //         console.log(THEME)
    //         console.log(FILE)
    //         // Create a directory if it doesn't exist
    //         // const uploadDirectory = path.join(process.cwd(), 'public/files');
    //         // console.log(uploadDirectory)
    //         // if (!fs.existsSync(uploadDirectory)) {
    //         //     fs.mkdirSync(uploadDirectory, { recursive: true });
    //         // }
    //         //
    //         // // Loop through the dropped files and copy them to /public/files
    //         // const filePromises = FILE.map(async (file: any) => {
    //         //     const filePath = path.join(uploadDirectory, file.name);
    //         //     await fs.promises.writeFile(filePath, file.data, 'base64');
    //         // });
    //         //
    //         // await Promise.all(filePromises);
    //
    //         // Perform additional actions with NAME, EMAIL, THEME if needed
    //
    //         return NextResponse.json({message: "you file is working.."})
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //         return NextResponse.json({error: error})
    //     }
    const data = await  req.formData()
    const NAME= data.get("NAME")
    const file: File | null = data.get("FILE") as unknown as File;
    console.log(file)
    console.log(NAME)

    if (!file) {
        return NextResponse.json({success: false});
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = `/tmp/${file.name}`;
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
    return NextResponse.json({success: true});

}
