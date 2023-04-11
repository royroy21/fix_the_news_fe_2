import {
    POST_SUBSCRIPTION_BEGIN,
    POST_SUBSCRIPTION_SUCCESS,
    POST_SUBSCRIPTION_ERROR,
    CLEAR_SUBSCRIPTION,
} from './../actions/subscriptions';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const subscriptionReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_SUBSCRIPTION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_SUBSCRIPTION_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_SUBSCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_SUBSCRIPTION:
      return {
        object: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default subscriptionReducer;
