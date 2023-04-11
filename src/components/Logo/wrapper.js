import { connect } from 'react-redux'
import {clearTopics, getTopics} from '../../store/actions/topics'

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearTopics: () => {
        dispatch(clearTopics())
      },
      getTopics: params => {
        dispatch(getTopics(params))
      },
    }
  }
};

const LogoWrapper = connect(
  null,
  mapDispatchToProps
);

export default LogoWrapper;
