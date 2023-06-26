import React from 'react';
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className = "about">
      <div className = "aboutTop"
      style = {{ backgroundImage : `url(${multiplePizzas})`}}>
      </div>
      <div className = "aboutBottom">
       <h1>ABOUT US</h1>
       <p>
       We came from humble beginnings in 1960, with just one store. 
       Now, as the largest pizza company in the world, we proudly continues its 
       legacy of delivering great-tasting pizza to customers’ doors. We believe in 
       doing the right thing, putting people first, creating inspired solutions, championing our customers, 
       and growing and winning together.
       </p>
      </div>
    </div>
  )
}

export default About
