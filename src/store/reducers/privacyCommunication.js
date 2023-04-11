import {
    GET_PRIVACY_COMMUNICATION_BEGIN,
    GET_PRIVACY_COMMUNICATION_SUCCESS,
    GET_PRIVACY_COMMUNICATION_ERROR,
} from '../actions/privacyCommunication';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const privacyCommunicationReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRIVACY_COMMUNICATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PRIVACY_COMMUNICATION_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case GET_PRIVACY_COMMUNICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    default:
      return state
  }
};

export default privacyCommunicationReducer;
