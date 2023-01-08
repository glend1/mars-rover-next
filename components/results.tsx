import { PositionData } from "../src/types"
import { firstCharacterUpper } from "../src/utils"

export const Results = ({results}: {results:PositionData[]}) => {
    if (results[0]) {
        const keys = Object.keys(results[0])
        return <table>
        <thead>{
            keys.map(key => <th key={key}>{firstCharacterUpper(key)}</th>)
            }</thead>
            <tbody>
                {results.map((positionData, i) => <tr key={i}>{keys.map(key => <td key={key}>{positionData[key]}</td>)}</tr>)}
            </tbody>
        </table>
    }
    return <></>
}