import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string
}

const handler = (request: NextApiRequest, respone: NextApiResponse<Data>) => {
  respone.status(200).json({ data: 'Info data' });
}
export default handler;