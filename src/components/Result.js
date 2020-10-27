import React from 'react'
import {Link} from 'react-router-dom'
import './result.css'
function Result() {
    return (
        <div className="result">
             <div className="score">
             <h3>Renew Highest Ranking: 120</h3>
            <h3>Your Score: 80</h3>
            <h3>Number of Correct Answers: 6 </h3>
            <h3>Number of Passing Answers: 4</h3>
             </div>
            <div className="pass">
                <h4>List of Passing Question and Answers</h4>
                 
            </div>
              <Link to="/quiz1">
                  <button className="btn">Try again</button>
              </Link>
        </div>
    )
}

export default Result
