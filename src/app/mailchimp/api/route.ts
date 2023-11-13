import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email_address, status, merge_fields } = await req.json();
        const mailchimpData = {
            email_address,
            status,
            merge_fields,
        };
            const MAILCHIMP_API_URL =
            "https://us11.api.mailchimp.com/3.0/lists/8550331981/members";
        const MAILCHIMP_API_KEY = "4666584e0137632a23f328cba3656452-us11";

        const response = await fetch(MAILCHIMP_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
            },
            body: JSON.stringify(mailchimpData),
        });

        const responseData = await response.json();

        return  NextResponse.json({"data": responseData})
    } catch (error) {
        return new NextResponse(error)
    }
}
