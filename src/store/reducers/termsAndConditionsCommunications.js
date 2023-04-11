import {
    GET_TERMS_AND_CONDITIONS_COMMUNICATION_BEGIN,
    GET_TERMS_AND_CONDITIONS_COMMUNICATION_SUCCESS,
    GET_TERMS_AND_CONDITIONS_COMMUNICATION_ERROR,
} from '../actions/termsAndConditionsCommunication';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const termsAndConditionsCommunicationReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TERMS_AND_CONDITIONS_COMMUNICATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TERMS_AND_CONDITIONS_COMMUNICATION_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case GET_TERMS_AND_CONDITIONS_COMMUNICATION_ERROR:
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

export default termsAndConditionsCommunicationReducer;
