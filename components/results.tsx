import { PositionData } from "../src/types"

export const Results = ({results}: {results:PositionData[]}) => {
    if (results[0]) {
        const keys = Object.keys(results[0]) || []
        return <table>
        <thead>{
            keys.map(key => <th key={key}>{key.toLocaleUpperCase()}</th>)
            }</thead>
            <tbody>
                {results.map((positionData, i) => <tr key={i}>{keys.map(key => <td key={key}>{positionData[key]}</td>)}</tr>)}
            </tbody>
        </table>
    }
    return <></>
}