import axios from "axios";

class DispatchAPI {
  successfulStatusCodes = [
    200,
    201,
    204,
  ];

  constructor() {
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.dispatchExtraActions = this.dispatchExtraActions.bind(this);
    this.get = this.get.bind(this);
    this.getAuthorizationHeaders = this.getAuthorizationHeaders.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.makeCall = this.makeCall.bind(this);
    this.patch = this.patch.bind(this);
  }

  create(
    baseUrl,
    beginAction,
    successAction,
    errorAction,
    data=null,
    params=null,
    extraActions=null,
    ) {
    return this.makeCall(
      axios.post,
      baseUrl,
      beginAction,
      successAction,
      errorAction,
      null,
      data,
      params,
      extraActions,
    );
  }

  get(
    baseUrl,
    beginAction,
    successAction,
    errorAction,
    id=null,
    params=null,
    extraActions=null,
    ) {
    return this.makeCall(
      axios.get,
      baseUrl,
      beginAction,
      successAction,
      errorAction,
      id,
      null,
      params,
      extraActions,
    );
  }

  patch(
    baseUrl,
    beginAction,
    successAction,
    errorAction,
    id=null,
    data=null,
    params=null,
    extraActions=null,
    ) {
    return this.makeCall(
      axios.patch,
      baseUrl,
      beginAction,
      successAction,
      errorAction,
      id,
      data,
      params,
      extraActions,
    );
  }

  delete(
    baseUrl,
    beginAction,
    successAction,
    errorAction,
    id=null,
    params=null,
    extraActions=null,
    ) {
    return this.makeCall(
      axios.delete,
      baseUrl,
      beginAction,
      successAction,
      errorAction,
      id,
      null,
      params,
      extraActions,
    );
  }

  makeCall(
    action,
    baseUrl,
    beginAction,
    successAction,
    errorAction,
    id=null,
    data=null,
    params=null,
    extraActions=null,
    ) {
    return (dispatch, getState) => {
      dispatch(beginAction(data, params));

      const paramsAsObject = params ? params : {};
      const headersAndParams = {
        params: paramsAsObject,
        ...this.getAuthorizationHeaders(getState),
      };
      const url = id ? `${baseUrl}${id}/` : baseUrl;
      const preppedAction = data
        ? () => action(url, data, headersAndParams)
        : () => action(url, headersAndParams);

      return preppedAction()
        .then(response => this.handleErrors(response, this.successfulStatusCodes))
        .then(response => {
          dispatch(successAction(response.data, params));
          this.dispatchExtraActions(dispatch, extraActions);
          return response.data;
        })
        .catch(error => dispatch(errorAction(error.response.data, params)));
    }
  }

  getAuthorizationHeaders(getState) {
    const {object: authToken} = getState().token;
    return authToken
      ? {headers: {Authorization: `Token ${authToken.auth_token}`}}
      : null;
  }

  dispatchExtraActions(dispatch, extraActions) {
    if (extraActions) {
      extraActions.forEach(action => {dispatch(action())})
    }
  }

  handleErrors(response, successfulStatusCodes) {
    if (!successfulStatusCodes.includes(response.status)) {
      throw Error(response.data);
    }
    return response;
  }
}

export default DispatchAPI;
