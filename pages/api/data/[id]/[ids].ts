import { NextApiRequest, NextApiResponse } from "next";
import cities from "@/data/data.json";

const handler = (
  req: NextApiRequest, 
  res: NextApiResponse
) => {
	const { id, ids } = req.query;
  console.log(req.query);

  try {
    cities.forEach((city) => {
      if (id === city.id.toString()) {
        city.tours.forEach((tour) => {
          if (ids === tour.id.toString()) {
            res.status(200).json([tour]);
            res.status(200).end();
          }
        });
      }
    });
    res.status(400).end();
  } catch (err) {
      res.status(400).end();
    }
};

export default handler;
