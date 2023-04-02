import React from "react";

export default function Die(props){

    return(
        <div 
        onClick={props.holdDice}
         className="die-face"
         style={{backgroundColor
         : props.isHeld ? "#59E391" : "white"}}>
            {/* <img className="image" src="/5.png"/> */}
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}