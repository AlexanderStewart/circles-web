import React from "react";

//Imports.
import "./style/index.css";
import Board from './Board';
import { myColors } from "./style/colors.js";
import { circleStates } from "./logic.js";

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

export default App;