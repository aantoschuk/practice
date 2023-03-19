import { USERS } from "@/data/users";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string
}

const handler = (request: NextApiRequest, respone: NextApiResponse<Data | string | undefined>) => {
  const { id } = request.query;
  if (request.method === 'GET') {
    const user = USERS.find((user) => user.id === Number(id))
    respone.status(200).json(user);
  }
  if (request.method === 'DELETE') {
    const user = request.body.user;
    respone.status(200).json(`${id}`);
  }
}



export default handler;