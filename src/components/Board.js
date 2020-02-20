import React from "react";

//Imports.
import "../style/index.scss";
import { HorizontalSpace, VerticalSpace, Circle } from "../style/styles.js";

class Board extends React.Component {
    renderCircle(i) {
      return (
        <Circle
          value={this.props.circleValues[i]}
          color={this.props.circleColors[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="title">circles</div>
          <div className="content-space"></div>
          <div className="game-board">
            <div className="game-row align-left">
              {this.renderCircle(0)}
              <HorizontalSpace />
              {this.renderCircle(1)}
              <HorizontalSpace />
              {this.renderCircle(2)}
              <HorizontalSpace />
              {this.renderCircle(3)}
            </div>
            <VerticalSpace />
            <div className="game-row align-right">
              {this.renderCircle(4)}
              <HorizontalSpace />
              {this.renderCircle(5)}
              <HorizontalSpace />
              {this.renderCircle(6)}
              <HorizontalSpace />
              {this.renderCircle(7)}
            </div>
            <VerticalSpace />
            <div className="game-row align-left">
              {this.renderCircle(8)}
              <HorizontalSpace />
              {this.renderCircle(9)}
              <HorizontalSpace />
              {this.renderCircle(10)}
              <HorizontalSpace />
              {this.renderCircle(11)}
            </div>
            <VerticalSpace />
            <div className="game-row align-right">
              {this.renderCircle(12)}
              <HorizontalSpace />
              {this.renderCircle(13)}
              <HorizontalSpace />
              {this.renderCircle(14)}
              <HorizontalSpace />
              {this.renderCircle(15)}
            </div>
          </div>
          <div className="content-space"></div>
          <div className="github-link-text">
            find the code here: <a className="github-link" href="https://github.com/AlexanderStewart/circles-web">
               github.com/alexanderstewart/circles-web
            </a>
          </div>
        </div>
      );
    }
  }

  export default Board;