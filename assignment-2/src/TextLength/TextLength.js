import React from 'react';

const textLength = (props) => {
    return (
        <div>
            <p>The length of the text is: {props.textLength}</p>
            <input type="text" onChange={props.changed} value={props.textValue} /> 
        </div>
    )
};

export default textLength;
