import React,{useEffect,useState} from 'react'
import Countdown from 'react-countdown';
import Home from './Home'
function ProgressBar() {
const[style,setStyle]=useState(null)
  let dwidth=400;
   
//   let  interValId =setInterval(function() {
//          dwidth -=400/120;
//          console.log(dwidth);
//     },1000)
//       setTimeout(function() {
//           clearInterval(interValId)
           
//       },120000)
     
    useEffect(()=>{


         
  let  interValId =setInterval(function() {
    dwidth -=400/120;
    console.log(dwidth);
},1000)
 setTimeout(function() {
     clearInterval(interValId)
      
 },120000)

        const myStyle={
            backgroundColor:'yellow',
             width: `${dwidth}px`,
            height:'100%',
          
    
        }
        setStyle(myStyle)
    },[dwidth])  
    
    
    return (
       
 <div style={{height:'5px',width:'400px',backgroundColor:'#333'}} className="progress-bar">
<div style={style} >
   
</div>

</div> 
    )
}

export default ProgressBar




{/* <div style={{height:'5px',width:'400px',backgroundColor:'#333'}} className="progress-bar">
<div style={myStyle} >
   
</div>

</div> */}