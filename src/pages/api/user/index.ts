import { USERS } from "@/data/users";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
}

const handler = (request: NextApiRequest, respone: NextApiResponse<Data[] | Data>) => {
  // handling different request
  if (request.method === 'GET') {
    respone.status(200).json(USERS);
  }
  if (request.method === 'POST') {
    const user = request.body.user;
    respone.status(200).json(user);
  }
}


export default handler;