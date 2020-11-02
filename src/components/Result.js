import React from 'react'
import {Link} from 'react-router-dom'
import './result.css'
function Result() {
    return (
        <div className="result">
            <h1>Your time is up !!</h1>
             
             <div className="Table">
                 <table>
                     <tr>
                         <td>Renew Highest Ranking:</td>
                         <td>120</td>

                     </tr>
                     <tr>
                         <td>Your Score:</td>
                         <td>80</td>
                     </tr>
                     <tr>
                         <td>Number of Correct Answers:</td>
                         <td>6</td>
                          
                     </tr>
                     <tr>
                     <td>Number of Passing Answers:</td>
                     <td>4</td>
                     </tr>
                 </table>

             </div>
            <div className="pass">
                <h4>List of Passing Question and Answers</h4>
                 
            </div>
            
                  <button className="BUTTON"> 
                  <Link to="/countdown">Try again</Link>
                  </button>
              
        </div>
    )
}

export default Result
