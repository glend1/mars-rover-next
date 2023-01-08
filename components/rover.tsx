import { useEffect, useState } from "react"
import { Directions, RoverInstructions } from "../src/types"
import { directions } from "../src/utils"


export const Rover = ({id, roverInstructions} : { id: number, roverInstructions: RoverInstructions }) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [direction, setDirection] = useState<Directions>("N")
    const [instructions, setInstructions] = useState("")
    useEffect(() => {
        roverInstructions.positionsData.x = x
        roverInstructions.positionsData.y = y
        roverInstructions.positionsData.direction = direction
        roverInstructions.instructions = instructions
    }, [x, y, direction, instructions, roverInstructions])
    return <div>
        <label htmlFor={`x[${id}]`}>X:</label><input id={`x[${id}]`} value={x} onChange={e => setX(parseInt(e.target.value))} type="number" />
        <label htmlFor={`y[${id}]`}>Y:</label><input id={`y[${id}]`} value={y} onChange={e => setY(parseInt(e.target.value))} type="number" />
        <label htmlFor={`direction[${id}]`}>Direction:</label><select onChange={e => setDirection(e.target.value)} id={`direction[${id}]`}>
            {directions.map(direction => <option value={direction} key={direction}>{direction}</option>)}
        </select>
        <label htmlFor={`instructions[${id}]`}>Instructions:</label><input id={`instructions[${id}]`} value={instructions} onChange={e => setInstructions(e.target.value)} />
    </div>
}
