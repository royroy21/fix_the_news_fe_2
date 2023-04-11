import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_TERMS_AND_CONDITIONS_COMMUNICATION_BEGIN =
  'GET_TERMS_AND_CONDITIONS_COMMUNICATION_BEGIN';
export const GET_TERMS_AND_CONDITIONS_COMMUNICATION_SUCCESS =
  'GET_TERMS_AND_CONDITIONS_COMMUNICATION_SUCCESS';
export const GET_TERMS_AND_CONDITIONS_COMMUNICATION_ERROR =
  'GET_TERMS_AND_CONDITIONS_COMMUNICATION_ERROR';

export const getTermsAndConditionsCommunicationBegin = data => ({
  type: GET_TERMS_AND_CONDITIONS_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getTermsAndConditionsCommunicationSuccess = data => ({
  type: GET_TERMS_AND_CONDITIONS_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getTermsAndConditionsCommunicationError = error => ({
  type: GET_TERMS_AND_CONDITIONS_COMMUNICATION_ERROR,
  payload: { error }
});

export const getTermsAndConditionsCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getTermsAndConditionsCommunicationBegin,
  getTermsAndConditionsCommunicationSuccess,
  getTermsAndConditionsCommunicationError,
  'terms_and_conditions',
);
