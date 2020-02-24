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

    //Set board.
    var circleValues = Array(16).fill(null);
    circleValues[5] = 1;
    circleValues[10] = 2;
    circleValues[6] = 3;

    var circleColors = Array(16).fill(myColors.nonActive);
    circleColors[5] = myColors.active;
    circleColors[10] = myColors.active;
    circleColors[6] = myColors.nonActive;

    var circleTextColors = Array(16).fill(myColors.background);
    circleTextColors[6] = myColors.goldText;

    var circleBorderColor = Array(16).fill(myColors.nonActive);
    circleBorderColor[5] = myColors.active;
    circleBorderColor[10] = myColors.active;
    circleBorderColor[6] = myColors.gold;

    var circleStates = Array(16).fill("nonactive");
    circleStates[5] = "active";
    circleStates[10] = "active";
    circleStates[6] = "gold";

    var selected = 0;

    this.state = {
      circleValues: circleValues,
      circleColors: circleColors,
      circleTextColors: circleTextColors,
      circleBorderColor: circleBorderColor,
      circleStates: circleStates,
      selected: selected
    };

    this.handleTap = this.handleTap.bind(this);
  }

  handleTap(i) {
    console.log("circle " + i + " tapped");

    var circleValues = this.state.circleValues;
    var circleColors = this.state.circleColors;
    var circleTextColors = this.state.circleTextColors;
    var circleBorderColor = this.state.circleBorderColor;
    var circleStates = this.state.circleStates;
    var selected = this.state.selected;

    //Handles the main logic of the game alongside /src/logic.js
    switch (circleStates[i]) {
      //Nonactive circle tapped.
      case "nonactive":
        if (selected === 2 && selectedBeside(i, circleStates)) {
          changeCircleTo(i, "active");

          var sum = selectedNums(circleStates, circleValues);
          circleValues[i] = sum;

          deselect();
        }
        break;

      //Active circle tapped.
      case "active":
        console.log("selected: " + selected);
        if (selected >= 2) {
          deselect();
        }
        if (!selectedBeside(i, circleStates)) {
          deselect();
        }
        selected++;
        changeCircleTo(i, "selected");
        break;

      //Selected circle tapped.
      case "selected":
        selected--;
        deselect();
        break;

      case "gold":
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
          circleTextColors = myColors.background;
          circleBorderColor[i] = myColors.nonActive;
          circleStates[i] = "nonactive";
          break;

        case "active":
          circleColors[i] = myColors.active;
          circleTextColors = myColors.background;
          circleBorderColor[i] = myColors.active;
          circleStates[i] = "active";
          break;

        case "selected":
          circleColors[i] = myColors.selected;
          circleTextColors = myColors.background;
          circleBorderColor[i] = myColors.selected;
          circleStates[i] = "selected";
          break;

        case "gold":
          circleColors[i] = myColors.nonActive;
          circleTextColors = myColors.goldText;
          circleBorderColor[i] = myColors.gold;
          circleStates[i] = "gold";
          break;

        default:
          break;
      }
    }

    this.setState({
      circleValues: circleValues,
      circleColors: circleColors,
      circleTextColors: circleTextColors,
      circleBorderColor: circleBorderColor,
      circleStates: circleStates,
      selected: selected
    });
  }

  render() {
    const circleValues = this.state.circleValues;
    const circleColors = this.state.circleColors;
    const circleTextColors = this.state.circleTextColors;
    const circleBorderColor = this.state.circleBorderColor;

    return (
      <div class="global-width">
        <div class="space-above-title"></div>
        <div className="title">circles</div>
        <div className="content-space-a"></div>
        <Board
          circleValues={circleValues}
          circleColors={circleColors}
          circleTextColors={circleTextColors}
          circleBorderColor={circleBorderColor}
          onPointerDown={this.handleTap}
        />
        <div className="content-space-b"></div>
        <div className="line-break"></div>
        <div className="content-space-b"></div>
        <div className="bottom-text-container">
          <div className="github-link-text">
            <strong>How To Play: </strong>Select any two 
            adjacent green circles and then select an empty 
            circle adjacent to one of them. The new circle's 
            value is the sum of the previously selected 
            circles.
            <br></br>
            <br></br>
            The purpose of the game is to fill in the 
            gold circle with a green circle that has 
            the same number. 
          </div>
          <br></br>
          <div className="github-link-text">
            find the code here: <br></br>
            <a className="github-link" href="https://github.com/AlexanderStewart/circles-web">
              github.com/alexanderstewart/circles-web
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
