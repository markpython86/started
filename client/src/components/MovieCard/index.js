import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from 'material-ui-rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import API from "../../utils/API";
import IconButton from '@material-ui/core/IconButton';
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
    width: 200,
  }
});


class movieCard extends React.Component {
  state = {
    expanded: false,
    id: '',
    title: '',
    year: '',
    rating: '',
    genre: '',
    image: '',
    isInEditMode: false,
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    width: 128,
    height: 128

  };
  

  componentDidMount() {
    this.loadContent()
  }

  changeEditMode = () => {
    this.setState(() => ({ isInEditMode: !this.state.isInEditMode }));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  updateCard = (id, value) => {
    API.updateMovie(id, value)
      .then(this.props.loadMovies())
      .catch(err => console.log(err));
  }

  deleteCard = (id) => {
    API.deleteMovie(id)
      .then((res) => this.props.loadMovies())
      .catch(err => console.log(err));
  }

  loadContent = () => {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      rating: this.props.rating,
      year: this.props.year,
      genre: this.props.genre,
      image: this.props.image
    })
  }

  render() {
    const { classes } = this.props;
    const newState = this.state

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
                src={this.state.image}
              />
            </Grid>
            {this.state.isInEditMode ?
              (<Grid item xs>
                <Grid item>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax="3"
                    label="Image URL"
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
                    label="Title"
                    className={classes.textField}
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-name"
                    label="Genre"
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
                    // iconFilled={true}
                    onChange={(i) => this.setState({rating: i})}
                  />
                </Grid>
              </Grid>
              )
              :
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Title: {this.state.title}
                </Typography>
                <Typography gutterBottom>
                  Genre: {this.state.genre}
                </Typography>
                <Typography color="textSecondary">Year: {this.state.year}</Typography>
                <Grid item>
                  <Rating
                    value={parseFloat(this.state.rating)}
                    max={5}
                    readOnly={true}
                    // iconFilled={true}
                    // onChange={(i) => this.setState({rating: i})}
                  />
                </Grid>
              </Grid>
            }
            {!this.state.isInEditMode ?
              <div>
                <Grid item>
                  <IconButton style={{ background: 'rgba(0, 0, 0, 0.2)' }} onClick={() => this.changeEditMode()}>
                    <i className="material-icons">edit</i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton style={{ color: '#f50057', background: 'rgba(0, 0, 0, 0.2)', marginTop: '53px' }} onClick={() => this.deleteCard(this.state.id)}>
                    <i className="material-icons">delete_forever</i>
                  </IconButton>
                </Grid>
              </div>
              :
              <div>
                <Grid item>
                  <IconButton style={{ background: 'rgba(0, 0, 0, 0.2)' }} onClick={() => {
                    this.updateCard(this.state.id, newState)
                    this.changeEditMode()

                  }}>
                    <i className="material-icons">check</i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton style={{ color: '#f50057', background: 'rgba(0, 0, 0, 0.2)', marginTop: '25px' }} onClick={() => this.deleteCard(this.state.id)}>
                    <i className="material-icons">delete_forever</i>
                  </IconButton>
                </Grid>
              </div>
            }
          </Grid>
        </Paper>

      </div>
    );
  }
}

movieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(movieCard);