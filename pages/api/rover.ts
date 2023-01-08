// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { multipleRovers } from '../../src/rover'
import { PositionData, RoverInstructions } from '../../src/rover.types'

interface RoverInput {
  roverInstructions: RoverInstructions[], 
  maxSize: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PositionData[]>
) {
  const json = req.body as RoverInput
  res.status(200).json(multipleRovers(json.roverInstructions, json.maxSize))
}
