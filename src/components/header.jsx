import React, { createElement } from 'react'

const Heading = (props)=>{

    const changeInput = () =>{
        if(props.headTag == 'textarea'){
            return (
                <input type="text"  value={props.Heading} onChange={props.onChange} className="headingTag"/>
            )
        } else{
            return(
                <h4>{props.Heading}</h4>
            )
        }
    }

    return(
        <div>
            {changeInput()}
        </div>
    )
}

export default Heading;
