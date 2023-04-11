import { connect } from 'react-redux'
import {getTopic} from "../../store/actions/topic";
import {prependTopic} from "../../store/actions/topics";

const mapStateToProps = (state) => {
  return {
    store: {
      topic: state.topic,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTopic: slug => {
        dispatch(getTopic(slug))
      },
      prependTopic: topic => {
        dispatch(prependTopic(topic))
      },
    }
  }
};

const TopicPageWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default TopicPageWrapper;
