import { Directions, PositionData } from "./types"

const directions: Directions[] = ["N", "E", "S", "W"]

export const rotateLeft = (direction: Directions) => {
    if (direction === "N") return directions[directions.length - 1]
    return directions[directions.indexOf(direction) - 1]
}

export const rotateRight = (direction: Directions) => {
    if (direction === "W") return directions[0]
    return directions[directions.indexOf(direction) + 1]
}

export const validPosition = (positionData: PositionData, maxSize: number) => positionData.x > maxSize || positionData.y > maxSize || positionData.x < 0 || positionData.y < 0 ? false : true

export const validInstructions = (instructions: string) => !/[^RML]/i.test(instructions)

export const toUpperAndTrim = (string: string) => string.trim().toUpperCase()