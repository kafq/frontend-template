import { Dispatch } from 'redux';
import { ConfigModel } from './models';

export enum ActionTypes {
  INITIALIZE_APP = 'INITIALIZE_APP',
  UPDATE_APP_CONFIG = 'UPDATE_APP_CONFIG',
}

interface InitializeAppAction {
  type: ActionTypes.INITIALIZE_APP;
}

interface UpdateAppConfigAction {
  type: ActionTypes.UPDATE_APP_CONFIG
}

export function updateAppConfig(newConfig: ConfigModel) {
  return {
    type: ActionTypes.UPDATE_APP_CONFIG,
    payload: {
      isAppLoaded: newConfig.isAppLoaded,
    }
  }
}

export function initializeApp() {
  return async (dispatch: Dispatch) => {
      setTimeout(() => {
        // All api calls and fetching tasks will go here
        dispatch(updateAppConfig({
          isAppLoaded: true
        }));
      }, 1000)
    }
}

export type Action = InitializeAppAction | UpdateAppConfigAction;
