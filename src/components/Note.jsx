import React, { useState } from "react";
import '../components/Notes.css'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import Yes from '../images/yes.png'
import Draggable from "react-draggable";
import { updateNote } from "../services/datastore";
import ReactMarkdown from "react-markdown";
import { produce } from "immer";
import { useEffect } from "react";

const Note = (props)=>{

    const [isTrue, setisTrue] = useState(true);
    const [editIcon, setIcon] = useState(Edit)
    const[headCont, setHeadcont] = useState(props.Heading)
    const [content, setContent] = useState(props.content)
    const[Position, SetPosition] = useState({x:props.x, y:props.y})
    const handleChange = (event)=>{
        setContent(event.target.value)
        updateNote(props.id, {Title: headCont, content: content, x :Position.x, y:Position.y, z_index: 0})
        console.log(content);
    }
    
    function handleDrag(event, data){
        // console.log(data);
        SetPosition({x: Position.x + data.deltaX, y: Position.y + data.deltaY});
        // cupdateNote(props.id, {Title: headCont, content: content, x :Position.x, y:Position.y, z_index: 0});
    }

    function onStart(){
        console.log('starting');
    }

    function onStop(event, data){
        console.log('just stopped');
        updateNote(props.id, {Title: headCont, content: content, x :Position.x, y:Position.y, z_index: 0});
    }

    const changeTextField =()=>{
        setisTrue(!isTrue);
        (isTrue)? setIcon(Yes) : setIcon(Edit);
        updateNote(props.id, {Title: headCont, content: content, x :Position.x, y: Position.y, z_index: 0})
    } 
    
    const changeHeadCont = (event)=>{
        setHeadcont(event.target.value);
        updateNote(props.id, {Title: headCont, content: content, x :Position.x, y:Position.y, z_index: 0})
    };
    const changeInput = () =>{
        if(!isTrue){
            return (
                <input type="text"  value={headCont} onChange={changeHeadCont} className="headingTag"/>
            )
        } else{
            return(
                <h4>{props.Heading}</h4>
            )
        }
    };

    const changeReturn = () => {
        if(isTrue){
            return(
                <div className="content-cont">
                    <ReactMarkdown>{props.content}</ReactMarkdown>
                </div>
            )
        } else{
            return (
                <textarea name="notesContent" id="editingArea" cols="30" rows="10" onChange={handleChange}>{props.content}</textarea>
            )
        }
    }

    
    return(
        <Draggable
        defaultPosition={{x:0, y:0}}
        handle = ".icon-btn-drag"
        onDrag={handleDrag}
        onStart= {onStart}
        onStop={onStop}
        position= {{x: Position.x, y: Position.y}}
        >
            <div className="note" id = {props.id}>
            <div className="note-nav">
                <div className="note-heading">
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