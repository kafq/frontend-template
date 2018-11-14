import { ActionTypes, Action } from './actions';

interface StateType {
  isAppLoaded: boolean;
}

const initialState: StateType = {
  isAppLoaded: false,
};

export default function reducer(state: StateType = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE_APP_CONFIG:
      return {
        ...state,
        isAppLoaded: !state.isAppLoaded,
      };
    default:
      return state;
  }
}
