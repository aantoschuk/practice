import { USERS } from "@/data/users";
import { NextApiRequest, NextApiResponse } from "next";


const handler = (request: NextApiRequest, respone: NextApiResponse<string[] | string | undefined>) => {
  const params = request.query.params;
  respone.status(200).json(params);
}



export default handler;