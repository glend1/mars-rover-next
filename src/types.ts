export type Directions = "N" | "E" | "S" | "W"

export interface PositionData {
    x: number,
    y: number,
    direction: Directions
}