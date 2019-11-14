import React from 'react';
import './User.css'

const userInput = (props) => {
    return (
        <div className="User">
            <p>Initial User name: {props.defaultname}</p>
            <p>Please Enter new username:</p>
            <input type="text" onChange={props.changeUserName} value={props.username}/>
        </div>

    )
}

export default userInput;