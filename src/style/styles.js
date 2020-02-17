import React from "react";

export function HorizontalSpace() {
  return <div className="horizontal-space"></div>;
}

export function VerticalSpace() {
  return <div className="vertical-space"></div>;
}

export function Circle(props) {
  return (
    <div
      className="circle"
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      {props.value}
    </div>
  );
}
