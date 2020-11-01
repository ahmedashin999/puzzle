import React from 'react'
import './leaderboard.css'
function Leaderboard() {
    return (
        <div className="table"> 
        <div className="table-content">
            <table>
                <tr>
                     <th>Ranking</th>
                     <th>Name</th>
                     <th>Score</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Maruf</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ashin</td>
                    <td>100</td>
                </tr>


            </table>
        </div>
        </div>
    )
}

export default Leaderboard
