import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '50px auto'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};



function CustomizedInputBase(props) {
  
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase onChange={(i)=> props.saveSearched(i.target.value)} className={classes.input} placeholder="Search Your Favorite Movie" />
      <Divider className={classes.divider} />
      <IconButton onClick={()=> props.findMovie()} className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(CustomizedInputBase);