import { Action, ActionCreator } from "redux";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState} from "../reducer";



// fetch
export const TOKEN_REQUEST = 'TOKEN_REQUEST';

export type TokenRequestAction = {
  type: typeof TOKEN_REQUEST
}

export const tokenRequest: ActionCreator<TokenRequestAction> = () => ({
  type: TOKEN_REQUEST,
})

// success 

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';

export type TokenRequestSuccessAction = {
  type: typeof TOKEN_REQUEST_SUCCESS;
  token:  string;
}

export const tokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (token: string) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
})


// error


export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';

export type TokenRequestErrorAction = {
  type: typeof TOKEN_REQUEST_ERROR;
  error: string;
}

export const tokenRequestError: ActionCreator<TokenRequestErrorAction> = (error: string) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
})

export const tokenRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
      var paramsString = document.location.search; 
      var searchParams = new URLSearchParams(paramsString);

      // if (localStorage.getItem('token') != null) {
      //   dispatch(tokenRequestSuccess(localStorage.getItem('token')));
      // }

      if (document.location.pathname == '/auth') {
        if (!getState()?.token?.token?.length) {
          dispatch(tokenRequest())
          let code = searchParams.get("code");
          if (code) {
            
            axios.post('https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
              {
        
                auth: {username: 'YXxs90nMyhV_5fYlczthJA', password: 'K-NMuOdyKUmhmLh9y9yhBbhiayxHiw'},
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
              }
            
            )
            .then(({data}) => {
              localStorage.setItem('token', data.access_token);
              dispatch(tokenRequestSuccess(data.access_token));
            })
            .catch((err) => {
              dispatch(tokenRequestError())
            }
            )
          }
        }
      }
  }

