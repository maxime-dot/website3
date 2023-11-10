import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  setCorsHeaders(res);

  try {
    const {email_address, status, merge_fields} = req.body;

    const response = await axios.post(
      "https://us11.api.mailchimp.com/3.0/lists/8550331981/members",
      {
        email_address,
        status,
        merge_fields,
      },
      {
        headers: {
          Authorization: "Bearer 4666584e0137632a23f328cba3656452-us11",
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error: any) {
    console.error(error);
    res.status(error.response?.status || 500).json({error: error.message});
  }
}

function setCorsHeaders(res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
