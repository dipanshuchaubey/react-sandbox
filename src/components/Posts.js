import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import RenderPropsMenu from "./layout/PostsMenu";
import SimpleSnackbar from "./includes/Liked";

const styles = theme => ({
  card: {
    maxWidth: 900,
    margin: "0 6px 0 6px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { black: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  render() {
    const { classes, title, image, content } = this.props;
    // let color = this.state.black ? "" : "red";
    return (
      <div className="mt-2 mb-2" style={{ margin: "auto" }}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <RenderPropsMenu />
              </IconButton>
            }
            title={title}
            subheader="September 14, 2016"
          />
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography component="p">{content}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <div>
              <SimpleSnackbar />
              {/* <IconButton
                onClick={this.changeColor.bind(this)}
                style={{ color: color }}
                aria-label="Add to favorites"
              >
                <FavoriteIcon />
              </IconButton> */}
            </div>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
