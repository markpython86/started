import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        }
    },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    sortBy: '',
    open: false,
  };

  handleChange = name => event => {
    this.props.setSort(event.target.value)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
       <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Sort By</InputLabel>
          <NativeSelect
            value={this.state.sortBy}
            onChange={this.handleChange('sortBy')}
            input={<Input name="age" id="age-native-helper" />}
          >
            <option value="" />
            <option value={'Alpha'}>Alphabatically</option>
            <option value={'Year'}>Year</option>
            <option value={'Genre'}>Genre</option>
          </NativeSelect>
          {/* <FormHelperText>Some important helper text</FormHelperText> */}
        </FormControl>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);