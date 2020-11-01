 import React, { Component } from 'react'
 
import './home.css';
import {Link} from 'react-router-dom'

function Home() {
    return(
        <div className="home">
            <div className="sidebar-left">
           <ul>
               <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li>
           </ul>
        
            </div>

            
             <div className="quizContent">
                   <h1>Welcome Guest!</h1>
                    <div className="intro">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero quibusdam recusandae ullam reprehenderit doloribus quod consequuntur facilis autem quis.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quisquam, quod nesciunt labore, nihil perferendis quaerat eaque sapiente maiores ratione sed, fugit expedita. Aspernatur illum accusantium itaque commodi minus similique!
                        </p>
                        <Link to="/how-to-play" > <button className="Btn">
                             Start
                             </button> </Link>
                         

                    </div>
             </div>

            <div className="sidebar-right">
            <ul>
               <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li>
               <li>
                   <a href="#">Menu</a>
               </li>
           </ul>
                
            </div>
             
            <div className="footer">
            This is some content in footer
        </div>
             
        </div>
    )
}

 
 export default Home
 