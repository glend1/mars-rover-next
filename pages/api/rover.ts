// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { multipleRovers } from '../../src/rover'
import { ErrorType, PositionData, RoverInstructions } from '../../src/rover.types'

interface RoverInput {
  roverInstructions: RoverInstructions[], 
  maxSize: number
}

//TODO make sure this falls over gracefully
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PositionData[] | ErrorType>
) {
  const json = req.body as RoverInput
  res.status(200).json(multipleRovers(json.roverInstructions, json.maxSize))
}
