import React, { useState } from "react";
import { createElement } from "react";
import reactMarkdown from "react-markdown";

const Content = (props)=>{

    const changeReturn = () => {
        if(props.element == 'p'){
            return(
                <div>
                    <reactMarkdown>{props.content}</reactMarkdown>
                </div>
            )
        } else{
            return (
                <textarea name="notesContent" id="editingArea" cols="30" rows="10" onChange={props.handleChange}>{props.content}</textarea>
            )
        }
    }
    
    
    return(
        <div className="content-cont">
            {changeReturn()}
        </div>
    )
}

export default Content

