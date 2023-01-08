import { marsRover, multipleRovers } from "./rover";
describe("MarsRover", () => {
  it("Should rotate the rover right", () => {
    expect(marsRover({x: 1, y: 1, direction:"N"}, "R")).toStrictEqual({"direction": "E", "x": 1, "y": 1});
  });
  it("Should move the rover 1 north", () => {
    expect(marsRover({x: 1, y: 1, direction:"N"}, "M")).toStrictEqual({"direction": "N", "x": 1, "y": 2});
  });
  it("Should move the rover back to starting location/direction", () => {
    expect(marsRover({x: 3, y: 3, direction:"N"}, "LMLMRRMRML")).toStrictEqual({"direction": "N", "x": 3, "y": 3});
  });
  it("Should throw an error if the rover moves out of bounds", () => {
    expect(() => marsRover({x: 3, y: 3, direction:"N"}, "MMM")).toThrow("Rover was lost, presumably to green men.");
  });
  it("Should throw an error if the rover cannot land within bounds", () => {
    expect(() => marsRover({x: 7, y: 3, direction:"N"}, "M")).toThrow("Rover could not land, invalid coordinates given.");
  });
  it("Should throw an error if the instructions are invalid", () => {
    expect(() => marsRover({x: 3, y: 3, direction:"N"}, "g")).toThrow("Rover cannot follow instructions as they contain illegal operatations.");
  });
});
describe("MultipleRovers", () => {
  it("Should give results for multiple rovers", () => {
    expect(multipleRovers([
      {x: 3, y: 3, direction:"N", instructions: "MLM"}, 
      {x: 4, y: 4, direction:"N", instructions: "MLM"}
    ])).toStrictEqual([{"direction": "W", "x": 2, "y": 4}, {"direction": "W", "x": 3, "y": 5}])
  })
  it("Should throw an error as json", () => {
    expect(multipleRovers([
      {x: 6, y: 3, direction:"N", instructions: "MLM"}, 
      {x: 4, y: 4, direction:"N", instructions: "MLM"}
    ])).toStrictEqual({error: "Rover could not land, invalid coordinates given."})
  })
})
