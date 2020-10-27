import React from 'react'
import Countdown from 'react-countdown';
import QuizOne from './QuizOne';
 
 
import './countdown.css'
function CountDown() {
    const renderer = ({ hours, minutes, seconds, completed })=>{
        if(completed) {
         return   <QuizOne/>
        }else{
    return <div className="timer">{seconds}</div>}

    } 
     
    return (
        <Countdown
        date={Date.now() + 3000}
          renderer={renderer}
       > 
       
             
             
           </Countdown>
            

      
    )
}

export default CountDown

