import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import API from '../../utils/API'
import Rating from 'material-ui-rating';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import './style.css'


function getModalStyle() {

    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
}

const styles = theme => ({

    root: {
        flexGrow: 1
    },

    paper: {
        padding: theme.spacing.unit * 4,
        margin: "auto",
        width: 500,
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
    },
    image: {
        width: 128,
        height: 128
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
        width: 200,
    }
});

class SimpleModal extends React.Component {
    state = {
        open: false,

        title: '',
        year: '',
        rating: '',
        genre: '',
        image: '',
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    saveCard = (value) => {
        API.saveMovie(value)
            .then()
            .catch(err => console.log(err));
    }


    render() {
        const { classes } = this.props;
        const newState = this.state

        return (
            <Grid item>
                <Tooltip disableFocusListener aria-label="Add New Movie" title="Add New Movie">
                    <IconButton onClick={this.handleOpen} className={classes.iconButton} aria-label="Search">
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper + ' newCard'}>

                        <Grid item >
                            <Typography variant="h6" id="modal-title">
                                Add a new movie
                            </Typography>
                            <Grid item >
                            <IconButton style={{ color: '#57C239',left: '400px', top: '-36px' }} onClick={() => {
                                this.saveCard(newState)
                                this.handleClose()
                            }}>
                                <i className="material-icons">save</i>
                            </IconButton>
                            <IconButton style={{ color: '#f50057',left: '411px', top: '-36px' }} onClick={() => {
                                this.handleClose()
                            }}>
                                <i className="material-icons">cancel</i>
                            </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8}>
                            <Grid item>
                                <TextField
                                    id="standard-name"
                                    label="Movie Image URL"
                                    className={classes.textField}
                                    value={this.state.image}
                                    onChange={this.handleChange('image')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    rowsMax="3"
                                    label="Movie Title"
                                    className={classes.textField}
                                    value={this.state.title}
                                    onChange={this.handleChange('title')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="standard-name"
                                    label="Movie Genre"
                                    className={classes.textField}
                                    value={this.state.genre}
                                    onChange={this.handleChange('genre')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="standard-number"
                                    label="Year"
                                    className={classes.textField}
                                    type="number"
                                    value={this.state.year}
                                    onChange={this.handleChange('year')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <Rating
                                    value={parseFloat(this.state.rating)}
                                    max={5}
                                    readOnly={false}
                                    onChange={(i) => this.setState({ rating: i })}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            </Grid>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;