import { USERS } from "@/data/users";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
}

const handler = (request: NextApiRequest, respone: NextApiResponse<Data[]>) => {
  respone.status(200).json(USERS);
}


export default handler;