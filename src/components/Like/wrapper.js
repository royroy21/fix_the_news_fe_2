import { connect } from 'react-redux'
import {
  postLikeNewsItem,
  postLikeTopicTopNewsItem,
  deleteLikeNewsItem,
  deleteLikeTopicTopNewsItem,
} from "../../store/actions/like";

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postLikeNewsItem: (data, newsItemId, topicSlug) => {
        dispatch(postLikeNewsItem(data, newsItemId, topicSlug))
      },
      postLikeTopicTopNewsItem: (data, topicSlug) => {
        dispatch(postLikeTopicTopNewsItem(data, topicSlug))
      },
      deleteLikeNewsItem: (id, newsItemId, topicSlug) => {
        dispatch(deleteLikeNewsItem(id, newsItemId, topicSlug))
      },
      deleteLikeTopicTopNewsItem: (id, topicSlug) => {
        dispatch(deleteLikeTopicTopNewsItem(id, topicSlug));
      },
    }
  }
};

const LikeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default LikeWrapper;
