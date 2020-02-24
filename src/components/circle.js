import React from 'react';

export function Circle(props) {
    return (
        <div className="circle" onPointerDown={props.onPointerDown} style={{ backgroundColor: props.color, color: props.textColor, borderColor: props.borderColor}}>{props.value}</div>
    );
}