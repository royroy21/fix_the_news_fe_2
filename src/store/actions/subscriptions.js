import DispatchAPI from "../../api";
import {subscriptionsURL} from "../../settings";

export const POST_SUBSCRIPTION_BEGIN   = 'POST_SUBSCRIPTION_BEGIN';
export const POST_SUBSCRIPTION_SUCCESS = 'POST_SUBSCRIPTION_SUCCESS';
export const POST_SUBSCRIPTION_ERROR = 'POST_SUBSCRIPTION_ERROR';
export const CLEAR_SUBSCRIPTION = 'CLEAR_SUBSCRIPTION';

export const postSubscriptionBegin = data => ({
  type: POST_SUBSCRIPTION_BEGIN,
  payload: { data },
});

export const postSubscriptionSuccess = data => ({
  type: POST_SUBSCRIPTION_SUCCESS,
  payload: { data }
});

export const postSubscriptionError = error => ({
  type: POST_SUBSCRIPTION_ERROR,
  payload: { error }
});

export const postSubscription = data => new DispatchAPI().create(
  subscriptionsURL,
  postSubscriptionBegin,
  postSubscriptionSuccess,
  postSubscriptionError,
  data,
);

export const clearSubscription = (params) => ({
  type: CLEAR_SUBSCRIPTION,
  params,
});
