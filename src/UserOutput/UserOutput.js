import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p> {props.username}</p>
            <p>{props.comment}</p>
        </div>
    );
};

export default userOutput;