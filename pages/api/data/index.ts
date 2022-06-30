import { NextApiRequest, NextApiResponse } from "next";
import cities from "@/data/data.json";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json(cities);
};

export default handler;