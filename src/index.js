import React from "react";
import ReactDOM from "react-dom";
 
//Style files.
import "./style/index.css";
import { myColors } from "./style/colors.js";
import { HorizontalSpace, VerticalSpace, Circle } from "./style/styles.js";

//Logic files.
import { circleStates } from "./logic.js";

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
        <div style={{ height: "30px" }}></div>
        <div style={{ textAlign: "center", color: "#FFFFFF" }}>
          Find the code here:{" "}
          <a
            style={{ color: "#FFFFFF" }}
            href="https://github.com/AlexanderStewart/circles-web"
          >
            github.com/AlexanderStewart/circles-web
          </a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    var circleValues = Array(16).fill(null);
    circleValues[5] = 1;
    circleValues[10] = 2;

    var circleColors = Array(16).fill(myColors.nonActive);
    circleColors[5] = myColors.active;
    circleColors[10] = myColors.active;

    this.state = {
      circleValues: circleValues,
      circleColors: circleColors
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log("circle " + i + " clicked");

    var circleValues = this.state.circleValues;
    var circleColors = this.state.circleColors;

    //Handles the main logic of the game alongside /src/logic.js
    switch (circleStates[i]) {

      case "nonactive":
        changeCircleTo(i, "active");
        break;

      case "active":
        changeCircleTo(i, "selected");
        break;

      case "selected":
        changeCircleTo(i, "active");
        break;

      default:
        break;

    }

    //Handles changing a given circle to a given state.
    function changeCircleTo(i, state) {
      switch (state) {

        case "nonactive":
          circleColors[i] = myColors.nonActive;
          circleStates[i] = "nonactive";
          break;

        case "active":
          circleColors[i] = myColors.active;
          circleStates[i] = "active";
          break;

        case "selected":
          circleColors[i] = myColors.selected;
          circleStates[i] = "selected";
          break;

        default:
          break;

      }
    }

    this.setState({
      circleValues: circleValues,
      circleColors: circleColors
    });
  }

  render() {
    const circleValues = this.state.circleValues;
    const circleColors = this.state.circleColors;

    return (
      <div className="app">
        <Board
          circleValues={circleValues}
          circleColors={circleColors}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
