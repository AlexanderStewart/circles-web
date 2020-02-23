import React from 'react';

export function Circle(props) {
    return (
        <div className="circle" onMouseUp={props.onMouseUp} onTouchEnd={props.onTouchEnd} style={{ backgroundColor: props.color }}>{props.value}</div>
    );
}