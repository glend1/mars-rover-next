import { directions, positionData } from "./types"

const directions: directions[] = ["N", "E", "S", "W"]

export const rotateLeft = (direction: directions) => {
    if (direction === "N") return directions[directions.length - 1]
    return directions[directions.indexOf(direction) - 1]
}

export const rotateRight = (direction: directions) => {
    if (direction === "W") return directions[0]
    return directions[directions.indexOf(direction) + 1]
}

export const validPosition = (positionData: positionData, maxSize: number) => positionData.x > maxSize || positionData.y > maxSize || positionData.x < 0 || positionData.y < 0 ? false : true

export const validInstructions = (instructions: string) => !/[^RML]/i.test(instructions)

export const toUpperAndTrim = (string: string) => string.trim().toUpperCase()