import React, { useState } from "react";
import Note from "./Note";
import '../style.scss'


const Add = (props)=>{
    
    const Notes = Object.entries(props.bodyContent).map(([id, content]) => {
        return <li className="theNote"><Note Heading = {content.Title} id = {id} onDelete = {props.onDelete} content = {content.content} handleChange = {props.handleChange} x = {content.x} y = {content.y} index = {content.z_index}/></li>
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