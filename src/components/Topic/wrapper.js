import { connect } from 'react-redux'
import {getUser} from "../../store/actions/user";
import {clearTopic, postTopic} from "../../store/actions/topic";

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      topic: state.topic,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getUser: () => {
        dispatch(getUser());
      },
      clearTopic: () => {
        dispatch(clearTopic());
      },
      postTopic: data => {
        dispatch(postTopic(data));
      },
    }
  }
};

const TopicWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default TopicWrapper;
