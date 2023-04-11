import {
    GET_REGISTRATION_COMMUNICATION_BEGIN,
    GET_REGISTRATION_COMMUNICATION_SUCCESS,
    GET_REGISTRATION_COMMUNICATION_ERROR,
} from '../actions/registrationCommunication';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const registrationCommunicationReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_REGISTRATION_COMMUNICATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_REGISTRATION_COMMUNICATION_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case GET_REGISTRATION_COMMUNICATION_ERROR:
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

export default registrationCommunicationReducer;
