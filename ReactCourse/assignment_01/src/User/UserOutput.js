import React from 'react';
import './User.css'

const userOutput = (props) => {
    return (
        <div className="User">
            <p>New User Detected:</p>
            <p>User name input: {props.username} </p>
        </div>

    )
}

export default userOutput;