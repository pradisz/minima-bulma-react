import UIActionTypes from './ui.types';

const INITIAL_STATE = {
  sidebarHidden: true,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UIActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarHidden: !state.sidebarHidden,
      };
    default:
      return state;
  }
};

export default uiReducer;
