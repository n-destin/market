import React, { useState, useEffect } from "react";
import Add from './add'
import Navigation from "./Navigation";
import { produce } from "immer";
import database, { createNote, deleteNote, onValueChange } from "../services/datastore";



function App(props){

    const [Title, setTitle] = useState('')
    const [bodyContent, setBodycontent] = useState({})

    const onDelete = (identification)=>{
    //    setBodycontent(produce((bodyContent)=>{delete bodyContent[identification]}));
       deleteNote(identification)
    }

    
    
    const onChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleCard = ()=>{
        createNote({Title:Title, content: "", x : 0, y:0})
        // setBodycontent(produce((bodyContent)=>{
        //     bodyContent[Date.now()] = {Title:Title, content: "", x : 0, y:0}
        // }))
    }


    useEffect(()=>{
        onValueChange((data)=>{
            setBodycontent(data)
        })
    }, [])
    
    

    return(
        <div id="app">
            <Navigation/>
            <Add onGenerate = {onChange} bodyContent = {bodyContent} generateCard = {handleCard} onDelete ={onDelete}/>
        </div>
    )
}

export default App;