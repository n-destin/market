import React from "react";

const Person = (props)=>{

    function getMessages(){

    } 

    return(
        <div>
            <div className="element" >
                <img src= {props.image} alt="person-image" />
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}