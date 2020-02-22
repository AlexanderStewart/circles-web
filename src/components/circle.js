import React from 'react';

export function Circle(props) {
    return (
        <div className="circle" onClick={props.onClick} style={{ backgroundColor: props.color }}>{props.value}</div>
    );
}