import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_REGISTRATION_COMMUNICATION_BEGIN   = 'GET_REGISTRATION_COMMUNICATION_BEGIN';
export const GET_REGISTRATION_COMMUNICATION_SUCCESS = 'GET_REGISTRATION_COMMUNICATION_SUCCESS';
export const GET_REGISTRATION_COMMUNICATION_ERROR = 'GET_REGISTRATION_COMMUNICATION_ERROR';

export const getRegistrationCommunicationBegin = data => ({
  type: GET_REGISTRATION_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getRegistrationCommunicationSuccess = data => ({
  type: GET_REGISTRATION_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getRegistrationCommunicationError = error => ({
  type: GET_REGISTRATION_COMMUNICATION_ERROR,
  payload: { error }
});

export const getRegistrationCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getRegistrationCommunicationBegin,
  getRegistrationCommunicationSuccess,
  getRegistrationCommunicationError,
  'registration',
);
