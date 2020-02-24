import React from 'react';

export function Circle(props) {
    return (
        <div className="circle" onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ backgroundColor: props.color }}>{props.value}</div>
    );
}