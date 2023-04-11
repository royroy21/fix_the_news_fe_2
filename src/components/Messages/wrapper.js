import { connect } from 'react-redux'
import {clearMessage, postMessage} from "../../store/actions/message";

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
      message: state.message,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearMessage: () => {
        dispatch(clearMessage())
      },
      postMessage: data => {
        dispatch(postMessage(data))
      },
    }
  }
};

const MessageWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default MessageWrapper;
