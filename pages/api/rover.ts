// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { marsRover } from '../../src/rover'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query)
  marsRover({x: 3, y:3, direction: "N"}, "M")
  res.status(200).json({ name: 'John Doe' })
}
