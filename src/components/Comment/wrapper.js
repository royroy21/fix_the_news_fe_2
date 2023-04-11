import { connect } from 'react-redux'
import {
  clearComment,
  postCommentComment,
} from "../../store/actions/comment";
import {getCommentComments} from "../../store/actions/commentComments";

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      comment: state.comment,
      commentComments: state.commentComments,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCommentComments: params => {
        dispatch(getCommentComments(params))
      },
      postCommentComment: data => {
        dispatch(postCommentComment(data))
      },
      clearComment: () => {
        dispatch(clearComment());
      },
    }
  }
};


const CommentWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default CommentWrapper;
