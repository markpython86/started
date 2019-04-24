import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import Modal from '../NewCard'

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
      <Tooltip disableFocusListener aria-label="Search" title="Search">
      <IconButton onClick={()=> props.findMovie()} className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      </Tooltip>
      <Divider className={classes.divider} />
      <Modal />
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(CustomizedInputBase);