import { connect } from 'react-redux'
import { getUser } from '../../store/actions/user';
import { POST_TOKEN_SUCCESS } from '../../store/actions/token';
import { updateDimensions } from '../../store/actions/appDimensions'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      token: state.token,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      updateDimensions: (data) => {
        dispatch(updateDimensions(data))
      },
      updateToken: (data) => {
        dispatch({type: POST_TOKEN_SUCCESS, payload: {data}});
      },
      getUser: () => {
        dispatch(getUser());
      },
    }
  }
};

const RootWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default RootWrapper;
