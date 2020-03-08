import React from "react";

//Component imports.
import Board from "./components/Board";
import MySnackbar from "./components/Snackbar";

//Logic imports.
import selectedBeside from "./logic/checkBeside.js";
import selectedNums from "./logic/selectedNums.js";

//Style imports.
import "./style/app.scss";
import "./style/board.scss";
import "./style/bounce.css";
import { myColors } from "./style/colors.js";
import "./style/fontawesome.min.css";

//Package imports.
import Confetti from "react-confetti";

class App extends React.Component {
  constructor(props) {
    super(props);

    var circleValues = Array(16).fill(null);
    var circleColors = Array(16).fill(myColors.nonActive);
    var circleTextColors = Array(16).fill(myColors.background);
    var circleBorderColor = Array(16).fill(myColors.nonActive);
    var circleStates = Array(16).fill("nonactive");
    var selected = 0;
    var runConfetti = false;
    var snackBarOpen = false;

    this.state = {
      circleValues: circleValues,
      circleColors: circleColors,
      circleTextColors: circleTextColors,
      circleBorderColor: circleBorderColor,
      circleStates: circleStates,
      selected: selected,
      runConfetti: runConfetti,
      snackBarOpen: snackBarOpen,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleTap = this.handleTap.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    //Initializing if value is undefined.
    if (!localStorage.getItem("level")) {
      localStorage.setItem("level", 0);
    }
    if (!localStorage.getItem("highestLevelAchieved")) {
      localStorage.setItem("highestLevelAchieved", 0);
    }

    this.resetBoard();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight
    });
  }

  handleTap(i) {
    console.log("circle " + i + " tapped");
    this.animateBounce(i);

    var circleValues = this.state.circleValues;
    var circleColors = this.state.circleColors;
    var circleTextColors = this.state.circleTextColors;
    var circleBorderColor = this.state.circleBorderColor;
    var circleStates = this.state.circleStates;
    var selected = this.state.selected;

    //This switch statement handles the main logic of the game alongside /src/logic.js
    switch (circleStates[i]) {
      //Nonactive circle tapped.
      case "nonactive":
        if (selected === 2 && selectedBeside(i, circleStates)) {
          this.changeCircleTo(i, "active");

          const sum = selectedNums(circleStates, circleValues);
          circleValues[i] = sum;

          selected = 0;
          this.deselect();
        }
        break;

      //Active circle tapped.
      case "active":
        if (selected >= 2) {
          selected = 0;
          this.deselect();
        }
        if (!selectedBeside(i, circleStates)) {
          selected = 0;
          this.deselect();
        }
        selected++;
        this.changeCircleTo(i, "selected");
        break;

      //Selected circle tapped.
      case "selected":
        selected = 0;
        this.deselect();
        break;

      //Gold circle tapped.
      case "gold":
        if (selected === 2 && selectedBeside(i, circleStates)) {
          const finalSum = selectedNums(circleStates, circleValues);
          if (circleValues[i] === finalSum) {
            this.changeCircleTo(i, "goldWin");

            this.onWin();

            selected = 0;
            this.deselect();
          }
        }
        break;

      default:
        break;
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

  backALevel() {
    var lsLevel = Number(localStorage.getItem("level")) - 1;

    if (lsLevel >= 0) {
      localStorage.setItem("level", lsLevel);

      this.resetBoard();
    }
  }

  onSnackBarClicked() {
    if (
      localStorage.getItem("level") ===
      localStorage.getItem("highestLevelAchieved")
    ) {
      var lsLevel = Number(localStorage.getItem("highestLevelAchieved")) + 1;
      localStorage.setItem("highestLevelAchieved", lsLevel);
    }

    this.forwardALevel();
  }

  forwardALevel() {
    console.log("forward a level");

    const level = Number(localStorage.getItem("level"));
    const highestLevelAchieved = Number(
      localStorage.getItem("highestLevelAchieved")
    );

    if (level < highestLevelAchieved) {
      var lsLevel = Number(localStorage.getItem("level")) + 1;
      localStorage.setItem("level", lsLevel);

      console.log("Level before resetBoard: " + localStorage.getItem("level"));

      this.resetBoard();
    }
  }

  resetBoard() {
    this.setState({
      runConfetti: false,
      snackBarOpen: false
    });

    var circleValues = this.state.circleValues;

    for (var z = 0; z <= 15; z++) {
      this.changeCircleTo(z, "nonactive");
      circleValues[z] = "";
    }

    var level = localStorage.getItem("level");
    const goldIndex = [6, 9, 15, 3, 9, 15, 6, 0, 13, 9, 3, 11, 0, 13, 11];
    const goldValue = [3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 10, 10, 11, 11, 11];

    console.log("number of levels: " + (goldValue.length - 1));

    this.changeCircleTo(goldIndex[level], "gold");
    circleValues[goldIndex[level]] = goldValue[level];

    this.changeCircleTo(5, "active");
    circleValues[5] = 1;
    this.changeCircleTo(10, "active");
    circleValues[10] = 2;

    for (var t = 0; t <= 15; t++) {
      this.animateBounce(t);
    }

    this.setState({ circleValues: circleValues });
  }

  //Deselect all selected circles.
  deselect() {
    var circleStates = this.state.circleStates;

    for (var z = 0; z <= 15; z++) {
      if (circleStates[z] === "selected") {
        this.changeCircleTo(z, "active");
      }
    }

    this.setState({ selected: 0 });
  }

  //Handles changing a given circle to a given state.
  changeCircleTo(i, state) {
    var circleValues = this.state.circleValues;
    var circleColors = this.state.circleColors;
    var circleTextColors = this.state.circleTextColors;
    var circleBorderColor = this.state.circleBorderColor;
    var circleStates = this.state.circleStates;

    switch (state) {
      case "nonactive":
        circleColors[i] = myColors.nonActive;
        circleTextColors[i] = myColors.background;
        circleBorderColor[i] = myColors.nonActive;
        circleStates[i] = "nonactive";
        break;

      case "active":
        circleColors[i] = myColors.active;
        circleTextColors[i] = myColors.background;
        circleBorderColor[i] = myColors.active;
        circleStates[i] = "active";
        break;

      case "selected":
        circleColors[i] = myColors.selected;
        circleTextColors[i] = myColors.background;
        circleBorderColor[i] = myColors.selected;
        circleStates[i] = "selected";
        break;

      case "gold":
        circleColors[i] = myColors.background;
        circleTextColors[i] = myColors.goldText;
        circleBorderColor[i] = myColors.gold;
        circleStates[i] = "gold";
        break;

      case "goldWin":
        circleColors[i] = myColors.active;
        circleTextColors[i] = myColors.background;
        circleBorderColor[i] = myColors.gold;
        circleStates[i] = "goldWin";
        break;

      default:
        break;
    }

    this.setState({
      circleValues: circleValues,
      circleColors: circleColors,
      circleTextColors: circleTextColors,
      circleBorderColor: circleBorderColor,
      circleStates: circleStates
    });
  }

  animateBounce(i) {
    var element = document.getElementById(i);
    element.classList.remove("bounce");
    element.classList.add("bounce");
    setTimeout(() => element.classList.remove("bounce"), 400);
  }

  onWin() {
    this.setState({
      runConfetti: true,
      snackBarOpen: true
    });
  }

  render() {
    const circleValues = this.state.circleValues;
    const circleColors = this.state.circleColors;
    const circleTextColors = this.state.circleTextColors;
    const circleBorderColor = this.state.circleBorderColor;

    const runConfetti = this.state.runConfetti;
    const windowWidth = this.state.windowWidth;
    const windowHeight = this.state.windowHeight;
    const snackBarOpen = this.state.snackBarOpen;

    return (
      <div className="global-width">
        <div
          className="snack-bar-container"
          onPointerDown={() => this.onSnackBarClicked()}
        >
          <MySnackbar snackBarOpen={snackBarOpen} />
        </div>
        <div key={runConfetti}>
          <Confetti
            width={windowWidth}
            height={windowHeight}
            run={runConfetti}
            gravity={0.3}
          />
        </div>

        <div className="space-above-title"></div>
        <div className="line-break"></div>
        <div className="title">circles</div>
        <div className="line-break"></div>
        <div className="level">level {localStorage.getItem("level")}</div>
        <div className="line-break"></div>
        <div className="content-space-b"></div>
        <Board
          circleValues={circleValues}
          circleColors={circleColors}
          circleTextColors={circleTextColors}
          circleBorderColor={circleBorderColor}
          onPointerDown={this.handleTap}
        />
        <div className="arrows-container">
          <div onPointerDown={() => this.backALevel()} className="arrow">
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className="space-between-arrows"></div>
          <div onPointerDown={() => this.resetBoard()} className="arrow">
            <i className="fa fa-redo"></i>
          </div>
          <div className="space-between-arrows"></div>
          <div onPointerDown={() => this.forwardALevel()} className="arrow">
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
        <div className="content-space-b"></div>
        <div className="line-break"></div>
        <div className="content-space-b"></div>
        <div className="bottom-text-container">
          <div className="github-link-text">
            <strong>How To Play: </strong>Select any two adjacent green circles
            and then select an empty circle adjacent to one of the selected
            green circles. The new circle's value becomes the sum of the
            previously selected circles.
            <br></br>
            <br></br>
            The purpose of the game is to fill in the gold ring with a green
            circle that has the same number.
          </div>
          <br></br>
          <div className="github-link-text">
            find the code here: <br></br>
            <a
              className="github-link"
              href="https://github.com/AlexanderStewart/circles-web"
            >
              github.com/alexanderstewart/circles-web
            </a>
          </div>
        </div>
        <div className="space-above-title"></div>
      </div>
    );
  }
}

export default App;
