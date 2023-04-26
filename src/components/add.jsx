import React, { useState } from "react";
import Note from "./Note";


const Add = (props)=>{
    
    const Notes = Object.entries(props.bodyContent).map(([id, content]) => {
        return <Note Heading = {content.Title} id ={id} onDelete = {props.onDelete} content = {props.cardCont} handleChange = {props.handleChange} changeContent ={props.changeContent}/>
    }) 

    return(
        <div id="add-section">
            <input type="text" id="title-content" onChange={props.onGenerate}/>
            <button onClick={props.generateCard} id="submit">Submit</button>
            <div className="notes">
                <ul className="notes">{Notes}</ul>
            </div>
        </div>
    )
}


export default Add;