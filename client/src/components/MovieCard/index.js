import React from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';
import { withStyles } from '../../../node_modules/@material-ui/core/styles';
import Card from '../../../node_modules/@material-ui/core/Card';
import CardHeader from '../../../node_modules/@material-ui/core/CardHeader';
// import CardMedia from '../../../node_modules/@material-ui/core/CardMedia';
import CardContent from '../../../node_modules/@material-ui/core/CardContent';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import red from '../../../node_modules/@material-ui/core/colors/red';
import MoreVertIcon from '../../../node_modules/@material-ui/icons/MoreVert';
import "./style.css";

const styles = theme => ({
  card: {
    width: '30.33%',
    margin: '13px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class movieCard extends React.Component {
  state = { 
    expanded: false,
    title: '',
    year:'',
    genre:'',
    image:''

    
    };
    
  componentDidMount() {
    this.loadContent()
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded}));
  };

  loadContent = () =>{
    this.setState({
      title: this.props.title,
      year: this.props.year,
      genre: this.props.genre,
      image: this.props.image
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.state.title}
          subheader={this.state.year}
        />
        <img
          className='image'
          src={this.state.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

movieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(movieCard);