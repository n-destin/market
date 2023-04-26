import React, { useState } from "react";
import '../components/Notes.css'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import Yes from '../images/yes.png'
import Content from "./Content";
import Heading from './header'
import Draggable from "react-draggable";
import { updateNote } from "../services/datastore";
import reactMarkdown from "react-markdown";

const Note = (props)=>{

    const [element, setElement] = useState('p')
    const [editIcon, setIcon] = useState(Edit)
    const [headTag, setHeadtag] = useState('h4');
    const[headCont, setHeadcont] = useState(props.Heading)
    const [content, setContent] = useState('Notes go here ... ')

    const handleChange = (event)=>{
        setContent(event.target.value)
    }
    

    const changeTextField =()=>{
        (element == 'p') ? setElement('textarea') : (setElement('p'));
        (editIcon == Edit)? setIcon(Yes) : setIcon(Edit);
        (headTag == 'h4') ? setHeadtag('textarea') : setHeadtag('h4');
        updateNote(props.id, {Title: headCont, content: content, x :0, y:0})
    }
    
    
    const changeHeadCont = (event)=>{
        setHeadcont(event.target.value);
    }

    const changeInput = () =>{
        if(headTag == 'textarea'){
            return (
                <input type="text"  value={headCont} onChange={changeHeadCont} className="headingTag"/>
            )
        } else{
            return(
                <h4>{headCont}</h4>
            )
        }
    }

    const changeReturn = () => {
        if(element == 'p'){
            return(
                <div className="content-cont">
                    <reactMarkdown>{content}</reactMarkdown>
                </div>
            )
        } else{
            return (
                <textarea name="notesContent" id="editingArea" cols="30" rows="10" onChange={handleChange}>{content}</textarea>
            )
        }
    }



    return(
        <Draggable
        defaultPosition={{x:0, y:0}}
        handle = ".icon-btn-drag"
        >
            <div className="note" id = {props.id}>
            <div className="note-nav">
                <div className="note-heading">
                    {}
                    {changeInput()}
                </div>
                <div className="icons">
                    <button className="icon-btn" onClick={()=>{props.onDelete(props.id)}}><img src={Delete} alt="delete-icon" id="image"/></button>
                    <button className="icon-btn" onClick={()=>{changeTextField()}}><img src={editIcon} alt="" id="image"/></button>
                    <button className="icon-btn-drag"><span><i>Drag</i></span></button>
                </div>
            </div>
            {changeReturn()}
        </div>
        </Draggable>
    )
}

export default Note;