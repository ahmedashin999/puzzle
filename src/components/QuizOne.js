import React, {useState, useEffect} from 'react'
import './quiz.css'
import {BsFillForwardFill} from 'react-icons/bs';
// import ProgressBar from './ProgressBar'
import firebase from 'firebase'
function QuizOne() {
  
    let sound = new Audio("../../assets/sounds/countdown.mp3");
    const quizData=[
        {
          question:'The usually round,red or yellow,edible fruit of a small tree',
          correctAnswer:'APPLE'
        },
         
      ]

      /**
       * Playing Sound When Correct Button Presseds
       */
      const playCorrect = () => sound.play();

      /** Splited Array of Answer Letter */
      const [answerWord, setAnswerWord] = useState([]);

      /** Current pointer which points the current index of the list */
      const [currentIndex, setCurrentIndex] = useState(0);
      
      /** Creating a temporary list of which correct button already pressed */
      const [correctSuffledIndexList, setCorrectSuffledIndexList] = useState([]);

      

    

    /**
     * Handling Button Pressing
     * @param ans This is the letter of the button pressed
     * @param shuffledIndex This is the number of index of shuffled letter button pressed.
     */
    const submitAns = (ans, shuffledIndex) => {
        // console.log(ans);
        // console.log(shuffledIndex);
        // console.log(currentIndex);
        if(ans === quizData[0].correctAnswer[currentIndex]){
            playCorrect();
            setCorrectSuffledIndexList([...correctSuffledIndexList, shuffledIndex])
            setCurrentIndex(currentIndex+1);
            if (currentIndex === quizData[0].correctAnswer.length - 1) {
              gotToNext()
            }
        }
        
    }

    /**
     * Checking if the index exist already or not in the correctShuffled List. It will return true if it exists in the list, otherwise false. 
     * @param index This is the index number of the button(Shuffled) pressed
     * @returns boolean
     */
    const shouldHiddenBtn = (index) => {
      return correctSuffledIndexList.indexOf(index) > -1;
    }

    /**
     * Shuffling the answer string to randomize the letter
     * @returns array
     * @param string 
     */
    const shuffle = (string) => {

      let array = string.split("");
      array.sort(() => Math.random() - 0.5);

      return array;
    }


    /**
     * Reseting current game stage
     */
    const resetCurrentStage = () => {
      setAnswerWord([]);
      setCorrectSuffledIndexList([])
      setCurrentIndex(0);
      setAnswerWord(shuffle(quizData[0].correctAnswer))
    }

    /**
     * The function will be call to go next question
     */
    const gotToNext = () => {
      resetCurrentStage();
    }

    

    useEffect(() => {
      setAnswerWord(shuffle(quizData[0].correctAnswer))
      return () => {
          
      }
  }, [])
 
    return (
        <div className="quiz">
            <div className="quiz-content">
            {/* <ProgressBar/> */}
            <button className="button">POINT</button>
              {quizData.map(ques=>(
                <p className="ques">{ques.question}</p>
              ))}
           

          <div className="quizArea">
            <div  className="quizArea__blank">

                {answerWord.map((ans, index) => {
                    if (index < currentIndex) {
                        return <div className="quizArea__blank__answerLetter" key={index}>{quizData[0].correctAnswer[index]}</div>
                    }else{
                       return <div className="quizArea__blank__answerLetter" key={index}></div>
                    }
                })}
                
            </div>
            
            <div className="quizArea__letterBtnArea">{answerWord.map((ans, index) => (
                <button 
                    disabled = {shouldHiddenBtn(index)}
                    className={shouldHiddenBtn(index) ? "rotate-center" : "quizArea__letterBtnArea__btn"}
                    key={index} onClick={ () => submitAns(ans, index)}>

                    {shouldHiddenBtn(index) ? "": ans}

                </button>))}
            </div>
        </div>

             <button className="btn-icon">
                 <BsFillForwardFill/>
             </button>
             {/* <button className="sign-out" onClick={()=>firebase.auth().signOut()}>Sign Out</button> */}
        </div>
        </div>
    )
}

export default QuizOne
