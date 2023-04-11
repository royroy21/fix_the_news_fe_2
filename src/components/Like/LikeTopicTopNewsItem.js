import BaseLike, {likeStyles} from "./BaseLike";
import {withStyles} from "@material-ui/core";
import LikeWrapper from "./wrapper";
import PropTypes from "prop-types";

class LikeTopicTopNewsItem extends BaseLike {

  handlePost = event => {
    event.preventDefault();
    const {likedObject, topicSlug} = this.props;
    this.props.actions.postLikeTopicTopNewsItem(
      {"news_item": likedObject.id},
      topicSlug,
    );
    this.setLoadingTimer()
  };

  handleDelete = event => {
    event.preventDefault();
    const {likedObject, topicSlug} = this.props;
    this.props.actions.deleteLikeTopicTopNewsItem(
      likedObject.like,
      topicSlug,
    );
    this.setLoadingTimer()
  };

}

export default withStyles(likeStyles)(LikeWrapper(LikeTopicTopNewsItem));

LikeTopicTopNewsItem.propTypes = {
  topicSlug: PropTypes.string.isRequired,
};
