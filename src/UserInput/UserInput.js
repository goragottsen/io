import React from 'react'

const userInput = (props) => {
    
    const inputStyle = {
        border: '2px solid lightblue',
        height: '3em',
        outline: 'none',
        width: '30%',
        fontSize: '12pt',
        borderRadius: '5px',
        marginTop: '30px',
        textAign: 'center',
        boxShadow: '0 2px 3px rgb(104, 144, 158)',
    };
    return(        
        <input 
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}/>
    )
};

export default userInput;