import Head from "next/head";
import { useState } from "react";
import { Results } from "../components/results";
import { Rover } from "../components/rover";
import { ErrorType, PositionData, RoverInstructions } from "../src/rover.types";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [maxSize, setMaxSize] = useState(5);
	const [results, setResults] = useState<PositionData[] | ErrorType>([]);
	const roverComponents = [];
	const roverInstructions: RoverInstructions[] = [];
	for (let i = 1; i < 3; i++) {
		const roverInstructionsObject: RoverInstructions = {
			x: 0,
			y: 0,
			direction: "N",
			instructions: "",
		};
		roverInstructions.push(roverInstructionsObject);
		roverComponents.push(
			<Rover id={i} roverInstructions={roverInstructionsObject} />
		);
	}
	//TODO add react/api tests
	//TODO maybe make it look nicer
	return (
		<>
			<Head>
				<title>Mars Rover</title>
				<meta name="description" content="A simple 'Mars Rover' exersize" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<form
					method="POST"
					action="/api/rover"
					onSubmit={(e) => {
						e.preventDefault();
						fetch("/api/rover", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ roverInstructions, maxSize }),
						})
							.then((response) => response.json())
							.then((data) => {
								setResults(data);
							})
							.catch((error) => {
								setResults({ error: "An unknown error has occured" });
							});
					}}
				>
					{roverComponents}
					<label htmlFor="maxSize">Max Size:</label>
					<input
						id="maxSize"
						value={maxSize}
						onChange={(e) => setMaxSize(parseInt(e.target.value))}
						title="Must contain only numbers"
						pattern="\d"
						type="number"
					/>
					<button>Submit</button>
				</form>
				<Results results={results} />
			</main>
		</>
	);
}
