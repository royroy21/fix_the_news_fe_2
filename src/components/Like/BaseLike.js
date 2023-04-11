import React, {Fragment} from 'react';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Error from "../Form/Error";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserNotLoggedInModal from "../User/UserNotLoggedInModal";

export const likeStyles = (theme) => ({
  count: {
    float: "right",
    fontSize: "0.8em",
    marginLeft: theme.spacing(0.5),
    marginTop: 5,
  },
  liked: {
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  loadingContainer: {
    marginLeft: 10,
  },
  notLiked: {
    color: "grey",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
});

class BaseLike extends React.Component {

  state = {
    loading: false,
    openUserNotLoggedIn: false,
  };

  handlePost = event => {
    throw Error("handlePost method not implemented");
  };

  handleDelete = event => {
    throw Error("handlePost method not implemented");
  };

  setLoadingTimer() {
    this.setState({loading: true});
    setTimeout(() => this.setState({loading: false}), 2000);
  }

  render(){
    const {
      classes,
      likedObject = {},
      likesCount,
    } = this.props;

    if (!this.props.store.user.object) {
      return (
        <Fragment>
          <UserNotLoggedInModal
            open={this.state.openUserNotLoggedIn}
            onClose={() => this.setState({'openUserNotLoggedIn': false})}
          />
          <ThumbUpAltOutlinedIcon
            onClick={() => this.setState({'openUserNotLoggedIn': true})}
            className={classes.notLiked}
          />
          {likesCount ? (
            <div className={classes.count}>{likesCount}</div>
          ) : null}
        </Fragment>
      )
    }

    if (this.state.loading) {
      return (
        <div className={classes.loadingContainer}>
          <CircularProgress color={"secondary"} size={20} />
        </div>
      )
    }

    return (
      <Fragment>
        {likedObject.like ? (
          <ThumbUpAltIcon
            className={classes.liked}
            onClick={this.handleDelete}
          />
          ) : (
          <ThumbUpAltOutlinedIcon
            className={classes.notLiked}
            onClick={this.handlePost}
          />
        )}
        {likesCount ? (
          <div className={classes.count}>{likesCount}</div>
        ) : null}
      </Fragment>
    );
  }
}

export default BaseLike;

BaseLike.propTypes = {
  likedObject: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired,
};
