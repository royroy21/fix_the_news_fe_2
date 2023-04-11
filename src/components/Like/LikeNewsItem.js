import BaseLike, {likeStyles} from "./BaseLike";
import {withStyles} from "@material-ui/core";
import LikeWrapper from "./wrapper";
import PropTypes from "prop-types";

class LikeNewsItem extends BaseLike {

  handlePost = event => {
    event.preventDefault();
    const {likedObject, topicSlug} = this.props;
    this.props.actions.postLikeNewsItem(
      {"news_item": likedObject.id},
      likedObject.id,
      topicSlug,
    );
    this.setLoadingTimer()
  };

  handleDelete = event => {
    event.preventDefault();
    const {likedObject, topicSlug} = this.props;
    this.props.actions.deleteLikeNewsItem(
      likedObject.like,
      likedObject.id,
      topicSlug,
    );
    this.setLoadingTimer()
  };

}

export default withStyles(likeStyles)(LikeWrapper(LikeNewsItem));

LikeNewsItem.propTypes = {
  topicSlug: PropTypes.string.isRequired,
};
