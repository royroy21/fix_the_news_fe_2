import DispatchAPI from "../../api";
import {postToken} from "./token";
import {userURL} from "../../settings";

export const POST_REGISTER_BEGIN   = 'POST_REGISTER_BEGIN';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
export const POST_REGISTER_ERROR = 'POST_REGISTER_ERROR';
export const CLEAR_REGISTER = 'CLEAR_REGISTER';

export const postRegisterBegin = () => ({
  type: POST_REGISTER_BEGIN,
});

export const postRegisterSuccess = data => ({
  type: POST_REGISTER_SUCCESS,
  payload: { data }
});

export const postRegisterError = error => ({
  type: POST_REGISTER_ERROR,
  payload: { error }
});

export const clearRegister = () => ({
  type: CLEAR_REGISTER,
});

export const postRegister = (data, isMobile=false) => new DispatchAPI().create(
  userURL,
  postRegisterBegin,
  postRegisterSuccess,
  postRegisterError,
  data,
  null,
  [() => postToken(data, isMobile)]
);
