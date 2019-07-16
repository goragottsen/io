import React from 'react';

const userOutput = props => {
    return(
        <div className="UserOutput">
            <p>{props.today}</p>
            <p>{props.tomorrow}</p>
        </div>
    )
}

export default userOutput;