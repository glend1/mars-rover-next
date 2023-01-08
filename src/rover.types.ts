export type Directions = "N" | "E" | "S" | "W"

export interface PositionData {
    x: number,
    y: number,
    direction: Directions
}

export interface RoverInstructions extends PositionData {
    instructions: string
}