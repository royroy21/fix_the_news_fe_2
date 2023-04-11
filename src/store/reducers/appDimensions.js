import {
  UPDATE_DIMENSIONS,
} from './../actions/appDimensions';

const initialState = {
  height: null,
  width: null,
  isMobile: null,
  isSmallScreen: null,
};

const appDimensionsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_DIMENSIONS) {
    return {
      height: action.payload.data.height,
      width: action.payload.data.width,
      isMobile: action.payload.data.isMobile,
      isSmallScreen: action.payload.data.isSmallScreen,
    };
  } else {
    return state;
  }
};

export default appDimensionsReducer;
