import { useEffect, useState } from "react";
import { Directions, RoverInstructions } from "../src/rover.types";
import { directions, validInstructions } from "../src/utils";

export const Rover = ({
	id,
	roverInstructions,
}: {
	id: number;
	roverInstructions: RoverInstructions;
}) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [direction, setDirection] = useState<Directions>("N");
	const [instructions, setInstructions] = useState("");
	useEffect(() => {
		roverInstructions.x = x;
		roverInstructions.y = y;
		roverInstructions.direction = direction;
		roverInstructions.instructions = instructions;
	}, [x, y, direction, instructions, roverInstructions]);
	return (
		<div>
			<label htmlFor={`x[${id}]`}>X:</label>
			<input
				id={`x[${id}]`}
				value={x}
				onChange={(e) => setX(parseInt(e.target.value))}
				title="Must contain only numbers"
				pattern="\d"
				type="number"
			/>
			<label htmlFor={`y[${id}]`}>Y:</label>
			<input
				id={`y[${id}]`}
				value={y}
				onChange={(e) => setY(parseInt(e.target.value))}
				title="Must contain only numbers"
				pattern="\d"
				type="number"
			/>
			<label htmlFor={`direction[${id}]`}>Direction:</label>
			<select
				onChange={(e) => setDirection(e.target.value as Directions)}
				id={`direction[${id}]`}
			>
				{directions.map((direction) => (
					<option value={direction} key={direction}>
						{direction}
					</option>
				))}
			</select>
			<label htmlFor={`instructions[${id}]`}>Instructions:</label>
			<input
				id={`instructions[${id}]`}
				value={instructions}
				required
				title="Must only contain the letters R, M, or L"
				pattern="^[RMLrml]*$"
				onChange={(e) => {
					if (validInstructions(e.target.value))
						setInstructions(e.target.value);
				}}
			/>
		</div>
	);
};
