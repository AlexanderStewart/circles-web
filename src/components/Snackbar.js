import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from '@material-ui/core/styles';
import { myColors } from "../style/colors";

const styles = {
  root: {
    background: myColors.gold,
    color: myColors.white
  }
};

class MySnackbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Snackbar
        open={this.props.snackBarOpen}
        ContentProps={{
          classes: {
            root: classes.root
          }
        }}
        message={
          <span>
            You win! Click here to go to the next level!{" "}
            <i className="fa fa-arrow-right"></i>
          </span>
        }
      />
    );
  }
}

export default withStyles(styles)(MySnackbar);
