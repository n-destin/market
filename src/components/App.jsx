import React, { useState, useEffect } from "react";
import Add from './add'
import Navigation from "./Navigation";
import { produce } from "immer";
import database, { createNote, deleteNote, onValueChange } from "../services/datastore";
import './../style.scss'



function App(props){

    function Note(Title, content, x, y, z_index){
        this.Title = Title;
        this.content = content;
        this.x = x;
        this.y = y;
        this.z_index = z_index;
    }

    const [Title, setTitle] = useState('')
    const [bodyContent, setBodycontent] = useState({})

    const onDelete = (identification)=>{
    //    setBodycontent(produce((bodyContent)=>{delete bodyContent[identification]}));
       deleteNote(identification)
       console.log('deleted' + identification);
    }
    
    const onChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleCard = ()=>{
        createNote(new Note(Title, '', 0, 0, 0))
        // createNote({Title:Title, content: "", x : 0, y:0})
        // setBodycontent(produce((bodyContent)=>{
        //     bodyContent[Date.now()] = {Title:Title, content: "", x : 0, y:0}
        // }))
    }


    useEffect(()=>{
        onValueChange((data)=>{
            setBodycontent(data)
        })
    }, [])
    
    console.log(bodyContent);
    

    return(
        <div id="app">
            <Navigation/>
            <Add onGenerate = {onChange} bodyContent = {bodyContent} generateCard = {handleCard} onDelete ={onDelete}/>
        </div>
    )
}

export default App;