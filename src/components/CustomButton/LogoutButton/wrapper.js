import { connect } from 'react-redux'
import {clearToken} from "../../../store/actions/token";
import {clearUser} from "../../../store/actions/user";
import {getTopics} from "../../../store/actions/topics";

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearToken: () => {
        dispatch(clearToken())
      },
      clearUser: () => {
        dispatch(clearUser())
      },
      getTopics: params => {
        dispatch(getTopics(params))
      },
    }
  }
};

const LogoutWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default LogoutWrapper;
