import React from 'react'

const userInput = (props) => {
    
    const inputStyle = {
        border: '2px solid lightblue',
        height: '3em',
        outline: 'none',
        width: '30%',
        fontSize: '12pt',
        borderRadius: '5px',
        margin: '30px auto',
        padding: '0 10px',
        boxShadow: '0 2px 3px rgb(104, 144, 158)',
        textAlign: 'center'
    };
    return(    
        <div>
            <input 
                type="text"                
                onChange={props.changed}
                value={props.currentName}
                style={inputStyle}
            />
        </div>    
        
    );
};

export default userInput;