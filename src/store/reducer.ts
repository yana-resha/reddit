
import { ActionCreator, Reducer} from "redux";
import {  tokenReducer, tokenState } from "./token/reducer";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { TokenRequestAction, TokenRequestErrorAction, TokenRequestSuccessAction, TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./token/actions";





export type RootState = {
  commentText : string;
  me: MeState;
  token: tokenState
}

const initialState:RootState = {
  commentText: 'Привет!',
  me: {loading: false, error: '', data: {}},
  token: {loading: false, error: '', token: ''}
  
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';


export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}



export const updateComment:ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
})



type MyAction = UpdateCommentAction
 | MeRequestAction
 | MeRequestSuccessAction
 | MeRequestErrorAction 
 | TokenRequestAction
 | TokenRequestSuccessAction
 | TokenRequestErrorAction 


export const rootReducer:Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text
      }
        case ME_REQUEST:
          case ME_REQUEST_SUCCESS:
          case ME_REQUEST_ERROR:
            return {
              ...state,
              me: meReducer(state.me, action)
            }
        case TOKEN_REQUEST:
          case TOKEN_REQUEST_SUCCESS:
          case TOKEN_REQUEST_ERROR:
            return {
              ...state,
              token: tokenReducer(state.token, action)
            }
        default:
          return state;
      }
 
}