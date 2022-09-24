import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IUserData } from "../../hooks/useUserData";
import { RootState } from "../reducer";
// fetch
export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
  type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
})

// success
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data:  IUserData;
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
})

// error

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  
  if (getState().token.token.length > 0 && getState().token.token !== 'undefined') {
    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me/', {
      headers: { Authorization: `bearer ${getState().token.token}` },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSuccess({name: userData.name, iconImg: userData.snoovatar_img}))
    })
    .catch((err) => {
      console.log(err)
      dispatch(meRequestError(String(err)))
    })
  }
}