import {
  POST_MESSAGE_BEGIN,
  POST_MESSAGE_ERROR,
  POST_MESSAGE_SUCCESS,
  CLEAR_MESSAGE,
} from "../actions/message";


const initialState = {
  object: null,
  loading: false,
  error: null,
};

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_MESSAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_MESSAGE_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_MESSAGE:
      return initialState;
    default:
      return state
  }
}

export default messageReducer;
