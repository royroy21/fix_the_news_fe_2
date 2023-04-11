import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_PRIVACY_COMMUNICATION_BEGIN   = 'GET_PRIVACY_COMMUNICATION_BEGIN';
export const GET_PRIVACY_COMMUNICATION_SUCCESS = 'GET_PRIVACY_COMMUNICATION_SUCCESS';
export const GET_PRIVACY_COMMUNICATION_ERROR = 'GET_PRIVACY_COMMUNICATION_ERROR';

export const getPrivacyCommunicationBegin = data => ({
  type: GET_PRIVACY_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getPrivacyCommunicationSuccess = data => ({
  type: GET_PRIVACY_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getPrivacyCommunicationError = error => ({
  type: GET_PRIVACY_COMMUNICATION_ERROR,
  payload: { error }
});

export const getPrivacyCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getPrivacyCommunicationBegin,
  getPrivacyCommunicationSuccess,
  getPrivacyCommunicationError,
  'privacy',
);
