import * as utils from "./utils";

describe("rotateLeft", () => {
	it("Should change N to W", () => {
		expect(utils.rotateLeft("N")).toStrictEqual("W");
	});
	it("Should change W to S", () => {
		expect(utils.rotateLeft("W")).toStrictEqual("S");
	});
	it("Should change S to E", () => {
		expect(utils.rotateLeft("S")).toStrictEqual("E");
	});
	it("Should change E to N", () => {
		expect(utils.rotateLeft("E")).toStrictEqual("N");
	});
});

describe("rotateRight", () => {
	it("Should change N to E", () => {
		expect(utils.rotateRight("N")).toStrictEqual("E");
	});
	it("Should change E to S", () => {
		expect(utils.rotateRight("E")).toStrictEqual("S");
	});
	it("Should change S to W", () => {
		expect(utils.rotateRight("S")).toStrictEqual("W");
	});
	it("Should change W to N", () => {
		expect(utils.rotateRight("W")).toStrictEqual("N");
	});
});

describe("validPosition", () => {
	it("Should return false if x is too big", () => {
		expect(utils.validPosition({ x: 7, y: 3, direction: "N" }, 5)).toEqual(
			false
		);
	});
	it("Should return false if y is too big", () => {
		expect(utils.validPosition({ x: 3, y: 7, direction: "N" }, 5)).toEqual(
			false
		);
	});
	it("Should return false if x is too small", () => {
		expect(utils.validPosition({ x: -3, y: 3, direction: "N" }, 5)).toEqual(
			false
		);
	});
	it("Should return false if y is too big", () => {
		expect(utils.validPosition({ x: 3, y: -3, direction: "N" }, 5)).toEqual(
			false
		);
	});
	it("Should return true if values are within range", () => {
		expect(utils.validPosition({ x: 3, y: 3, direction: "N" }, 5)).toEqual(
			true
		);
	});
});

describe("validInstructions", () => {
	it("Should return false if the instructions contain any letter that isn't RML", () => {
		expect(utils.validInstructions("RMLg")).toEqual(false);
	});
	it("Should return true if the instructions contain only RML letters", () => {
		expect(utils.validInstructions("RML")).toEqual(true);
	});
	it("Should return true regardless of case", () => {
		expect(utils.validInstructions("RmL")).toEqual(true);
	});
});
describe("toUpperAndTrim", () => {
	it("Should remove excess whitespace", () => {
		expect(utils.toUpperAndTrim("   R    ")).toEqual("R");
	});
	it("Should convert the string to uppercase", () => {
		expect(utils.toUpperAndTrim("m")).toEqual("M");
	});
});
describe("firstCharacterUpper", () => {
	it("Should change the first character to be uppercase", () => {
		expect(utils.firstCharacterUpper("hello")).toEqual("Hello");
	});
});
