import { ErrorType, PositionData } from "../src/rover.types"
import { firstCharacterUpper } from "../src/utils"

export const Results = ({results}: {results:PositionData[] | ErrorType}) => {
    if ('error' in results) {
        return <p>{results.error}</p>
    }
    if (results[0]) {
        const keys = Object.keys(results[0])
        return <table>
        <thead><tr>{
            keys.map(key => <th key={key}>{firstCharacterUpper(key)}</th>)
            }</tr></thead>
            <tbody>
                {results.map((positionData, i) => 
                    <tr key={i}>{keys.map(key => 
                        <td key={key}>{positionData[key as keyof PositionData]}</td>
                    )}</tr>
                )}
            </tbody>
        </table>
    }
    return <p>No Rover data to process.</p>
}