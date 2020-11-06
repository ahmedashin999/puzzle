import React,{useState,useEffect} from 'react'
import Countdown from 'react-countdown';
import QuizOne from './QuizOne';
 import db from '../Fire'
 
import './countdown.css'
function CountDown() {
    const[quizData,setQuizData]=useState([]);
    useEffect(()=>{
        db.collection('quizData').onSnapshot(snapshot=>{
          setQuizData(snapshot.docs.map(doc =>doc.data()))
        })
      },[])
    const renderer = ({ hours, minutes, seconds, completed })=>{
        if(completed) {
         return   <QuizOne quizData={quizData} />
        }else{
    return <div className="countdown">
        <div className="timer">{seconds}</div>
    </div>  }

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

