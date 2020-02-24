import React from "react";

//Imports.
import "../style/index.scss";
import "../style/board.scss";
import { Circle } from "./circle.js";

class Board extends React.Component {
  renderCircle(i) {
    return (
      <Circle
        value={this.props.circleValues[i]}
        color={this.props.circleColors[i]}
        onTouchStart={() => this.props.onTouchStart(i)}
        onMouseDown={() => this.props.onMouseDown(i)}
      />
    );
  }

  render() {
    return (
        <div className="game-board">
          <div className="game-row align-left">
            {this.renderCircle(0)}
            <div className="horizontal-space"></div>
            {this.renderCircle(1)}
            <div className="horizontal-space"></div>
            {this.renderCircle(2)}
            <div className="horizontal-space"></div>
            {this.renderCircle(3)}
          </div>
          <div className="vertical-space" style={{ height: "4vh" }}></div>
          <div className="game-row align-right">
            {this.renderCircle(4)}
            <div className="horizontal-space"></div>
            {this.renderCircle(5)}
            <div className="horizontal-space"></div>
            {this.renderCircle(6)}
            <div className="horizontal-space"></div>
            {this.renderCircle(7)}
          </div>
          <div className="vertical-space"></div>
          <div className="game-row align-left">
            {this.renderCircle(8)}
            <div className="horizontal-space"></div>
            {this.renderCircle(9)}
            <div className="horizontal-space"></div>
            {this.renderCircle(10)}
            <div className="horizontal-space"></div>
            {this.renderCircle(11)}
          </div>
          <div className="vertical-space"></div>
          <div className="game-row align-right">
            {this.renderCircle(12)}
            <div className="horizontal-space"></div>
            {this.renderCircle(13)}
            <div className="horizontal-space"></div>
            {this.renderCircle(14)}
            <div className="horizontal-space"></div>
            {this.renderCircle(15)}
          </div>
        </div>
    );
  }
}

export default Board;
