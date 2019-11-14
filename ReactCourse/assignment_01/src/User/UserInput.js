import React from 'react';
import './User.css'

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };


    return (
        <div className="User">
            <p>Initial User name: {props.defaultname}</p>
            <p>Please Enter new username:</p>
            {/* below: inline style for input component */}
            <input type="text" style={style} onChange={props.changeUserName} value={props.username}/>
        </div>

    )
}

export default userInput;