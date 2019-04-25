import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Rating from 'material-ui-rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
// import API from "../../utils/API";
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    width: 500
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
    size:"120px",
    fontSize: '29px'
  }
});


class movieCard extends React.Component {
  state = {
    width: 128,
    height: 128

  };
  



  render() {
    const { classes } = this.props;
    // const newState = this.state

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <img
                width={this.state.width}
                height={this.state.height}
                className={classes.image}
                alt="complex"
                src={"https://www.smileysapp.com/emojis/sorry-emoticon.png"}
              />
            </Grid>
              <Grid item xs>
                <Typography className={classes.textField}>
                  Sorry We Couldn't Find Your Movie Try Something Else
                </Typography>
              </Grid>
          </Grid>
        </Paper>
      </div>
    )}}

movieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(movieCard);