 import React, { Component } from 'react'
 import {Howl, Howler} from 'howler';
import bell from '../audio/bell.mp3'
import firebase from 'firebase'
import './home.css';
import {Link} from 'react-router-dom'
// const audioClips=[
//     {sound:bell,label:'bell'}
// ]
//    class Home extends Component {
//        SoundPlay = (src)=>{
//            const sound=new Howl({
//                src
//            })
//            sound.play()
//        }
//        RenderButtonSound=()=>{
//            return audioClips.map((soundObj,index)=>{
//             return(
//                 <button key={index} onClick={this.SoundPlay(soundObj.sound)}>
//                     {soundObj.label}
//                 </button>
//             )
//            })
                
//            }
       
//      render() {
//          Howler.volume(1.0)
          

//          return (
//              <div>
//                  {this.RenderButtonSound()}
//              </div>
//          )
//          }
//  }
 
function Home() {
    return(
        <div className="home">
            <h1>Welcome Guest!</h1>
            <h2>How To Play</h2>
             <div className="quizContent">
               <div className="quiz1">
                   <ul>
                       <li>You have to click word in order</li>
                       <li>Time will be limited</li>
                       <li>If you successfully click every word in right order your point will increase by 10</li>

                        <li>If you click wrong word your point will decrease by 1 </li>
                        <li>If you successfully click 3 words in a row you will get 30 bonus point and 10 seconds bonus time</li>
                        <li>You can pass the question.No point will be deducted</li>

                   </ul>
                    
                   <Link to="/countdown">
                       <button className="btn">Start</button>

                   </Link>
                   
               </div>
               <div className="quiz2">
                   <ul>
                       <li>You have to click word in order</li>
                       <li>Time will be limited</li>
                       <li>If you successfully click every word in right order your point will increase by 10</li>

                        <li>If you click wrong word your point will decrease by 1 </li>
                        <li>If you successfully click 3 words in a row you will get 30 bonus point and 10 seconds bonus time</li>
                        <li>You can pass the question.No point will be deducted</li>

                   </ul>
                   <Link to="/quiz1">
                       <button className="btn">Start</button>

                   </Link>
               </div>
             </div>

            
        </div>
    )
}

 
 export default Home
 