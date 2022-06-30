import { NextApiRequest, NextApiResponse } from "next";
import cities from "@/data/data.json";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const {id} = req.query;
  
  try {
    cities.forEach((city) => {
      if (id === city.id.toString()) {
        res.status(200).json([city]);
        res.status(200).end();
      }
    });

    res.status(400).end();
  } catch (err) {
      console.log(err.message);
      res.status(404).end();
    }
};

export default handler;