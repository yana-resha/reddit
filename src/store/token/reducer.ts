import { Reducer } from "react";
import { TokenRequestAction, TokenRequestErrorAction, TokenRequestSuccessAction, TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./actions";



export type tokenState = {
  loading: boolean;
  error: string;
  token: string; 
}

type AuthActions = TokenRequestAction
  | TokenRequestSuccessAction
  | TokenRequestErrorAction 

  export const tokenReducer: Reducer<tokenState, AuthActions> = (state, action) => {
    switch(action.type) {
      case TOKEN_REQUEST: 
      return {
        ...state, 
        loading: true,
      }
      case TOKEN_REQUEST_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false,
        }
      case TOKEN_REQUEST_SUCCESS:
        return {
          ...state,
          token: action.token,
          loading: false,
        }
      
    default: return state
    }
  
  }