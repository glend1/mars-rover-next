import { ErrorType, PositionData, RoverInstructions } from './rover.types';
import * as utils from './utils';

export const multipleRovers = (roverInstructions: RoverInstructions[], maxSize = 5): PositionData[] | ErrorType => {
    try {
        return roverInstructions.map(instruction => marsRover({x: instruction.x, y: instruction.y, direction: instruction.direction}, instruction.instructions, maxSize))
    } catch (e) {
        return {error: e} as ErrorType
    }
}

export const marsRover = (positionData: PositionData, instructions: string, maxSize = 5) => {
    if (!utils.validPosition(positionData, maxSize)) throw "Rover could not land, invalid coordinates given."
    instructions = utils.toUpperAndTrim(instructions)
    if (!utils.validInstructions(instructions)) throw "Rover cannot follow instructions as they contain illegal operatations."
    const newPositionData = {...positionData}
    for (let i = 0; i < instructions.length; i++) {
        switch(instructions[i]) {
            case "L":
                newPositionData.direction = utils.rotateLeft(newPositionData.direction)
                break
            case "R":
                newPositionData.direction = utils.rotateRight(newPositionData.direction)
                break
            case "M":
                moveRover(newPositionData, maxSize)
                break
        }
    }
    return newPositionData
}

const moveRover = (newPositionData: PositionData, maxSize: number) => {
    switch (newPositionData.direction) {
        case "N":
            newPositionData.y++
            break;
        case "E":
            newPositionData.x++
            break;
        case "S":
            newPositionData.y--
            break;
        case "W":
            newPositionData.x--
            break;
    }
    if (!utils.validPosition(newPositionData, maxSize)) throw "Rover was lost, presumably to green men."
}
