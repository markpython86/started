import React from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';
import { withStyles } from '../../../node_modules/@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from 'material-ui-rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import API from "../../utils/API";
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import Typography from '../../../node_modules/@material-ui/core/Typography';
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


class movieCard extends React.Component {
  state = {
    expanded: false,
    id:'',
    title: '',
    year: '',
    rating: '',
    genre: '',
    image: '',
    isInEditMode: false,
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    


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
      .then((res) => console.log(res))//this.setState({ movies: res.data}))
      .catch(err => console.log(err));
  }

  deleteCard = (id) => {
    API.deleteMovie(id)
    .then((res) => this.props.loadMovies())//this.setState({ movies: res.data}))
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
              <ButtonBase className={classes.image}>
                <img
                  className={classes.image}
                  alt="complex"
                  src={this.state.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                {this.state.isInEditMode ?
                  (<div>
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
                        onChange={(i) => console.log(i)}
                      />
                    </Grid>
                  </div>
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
                        onChange={(i) => console.log(i)}
                      />
                    </Grid>
                  </Grid>
                }

              </Grid>
              {!this.state.isInEditMode ?
              <div>
                <Grid item>
                  <IconButton onClick={() => this.changeEditMode()}>
                    <i className="material-icons">edit</i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => this.deleteCard(this.state.id)}>
                   <i className="material-icons">delete_forever</i>
                  </IconButton>
                </Grid>
                </div>
                :
              <div>
                <Grid item>
                  <IconButton style={{ color: 'rgba(0, 0, 0, 0.78)' }} onClick={() => {
                    this.updateCard(this.state.id, newState)
                    this.changeEditMode()
                    
                    }}>
                    <i className="material-icons">check</i>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => this.deleteCard(this.state.id)}>
                   <i className="material-icons">delete_forever</i>
                  </IconButton>
                </Grid>
                </div>
              }
            </Grid>
          {/* </Grid> */}
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