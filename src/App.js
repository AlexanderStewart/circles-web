import React from "react";

//Imports.
import "./style/index.scss";
import "./style/board.scss";
import Board from "./components/Board";
import { myColors } from "./style/colors.js";
import { selectedBeside } from "./logic/checkBeside.js";
import { selectedNums } from "./logic/selectedNums.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    //Set board
    var circleValues = Array(16).fill(null);
    circleValues[5] = 1;
    circleValues[10] = 2;

    var circleColors = Array(16).fill(myColors.nonActive);
    circleColors[5] = myColors.active;
    circleColors[10] = myColors.active;

    var circleStates = Array(16).fill("nonactive");
    circleStates[5] = "active";
    circleStates[10] = "active";

    var selected = 0;

    this.state = {
      circleValues: circleValues,
      circleColors: circleColors,
      circleStates: circleStates,
      selected: selected
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log("circle " + i + " clicked");

    var circleValues = this.state.circleValues;
    var circleColors = this.state.circleColors;
    var circleStates = this.state.circleStates;
    var selected = this.state.selected;

    //Handles the main logic of the game alongside /src/logic.js
    switch (circleStates[i]) {
      //Nonactive circle clicked.
      case "nonactive":
        if (selected === 2 && selectedBeside(i, circleStates)) {
          changeCircleTo(i, "active");

          var sum = selectedNums(circleStates, circleValues);
          circleValues[i] = sum;

          deselect();
        }
        break;

      //Active circle clicked.
      case "active":
        console.log("selected: " + selected);
        if(selected >= 2) {
          deselect();
        }
        if(!(selectedBeside(i, circleStates))) {
          deselect();
        }
        selected++;
        changeCircleTo(i, "selected");
        break;

      //Selected circle clicked.
      case "selected":
        selected--;
        changeCircleTo(i, "active");
        break;

      default:
        break;
    }

    //Deselect all selected circles
    function deselect() {
      for (var z = 0; z <= 15; z++) {
        if (circleStates[z] === "selected") {
          changeCircleTo(z, "active");
        }
      }
      selected = 0;
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
      circleColors: circleColors,
      circleStates: circleStates,
      selected: selected
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
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;