import { useEffect, useState } from "react"
import { Directions, RoverInstructions } from "../src/types"


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
        <label htmlFor={`x[${id}]`}>X:</label><input id={`x[${id}]`} name={`rover[${id}].x`} value={x} onChange={e => setX(parseInt(e.target.value))} type="number" />
        <label htmlFor={`y[${id}]`}>Y:</label><input id={`y[${id}]`} name={`rover[${id}].y`} value={y} onChange={e => setY(parseInt(e.target.value))} type="number" />
        <label htmlFor={`direction[${id}]`}>Direction:</label><select onChange={e => setDirection(e.target.value)} id={`direction[${id}]`} name={`rover[${id}].direction`}>
            <option>N</option>
            <option>E</option>
            <option>S</option>
            <option>W</option>
        </select>
        <label htmlFor={`instructions[${id}]`}>Instructions:</label><input id={`instructions[${id}]`} name={`rover[${id}].instructions`} value={instructions} onChange={e => setInstructions(e.target.value)} />
    </div>
}
