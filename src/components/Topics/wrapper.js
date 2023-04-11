import { connect } from 'react-redux'
import {getTopics} from '../../store/actions/topics'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      topics: state.topics,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTopics: params => {
        dispatch(getTopics(params))
      },
    }
  }
};

const TopicsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default TopicsWrapper;
