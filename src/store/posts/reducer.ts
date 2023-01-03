import { Reducer } from "react";
import { ICardListPosts } from "../../shared/CardsList";
import { PostsRequestAction, PostsRequestErrorAction, PostsRequestSuccessAction, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./actions";

export type PostsState = {
  loading: boolean;
  error: string;
  data: ICardListPosts[]
  after: string,
  load: number,
}

type PostsActions = PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction 
 

export const postsReducer: Reducer<PostsState, PostsActions> = (state, action) => {
  switch(action.type) {
    case POSTS_REQUEST: 
    return {
      ...state, 
      loading: true,
    }
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        after: action.after,
        load: action.load,
        loading: false,
      }
    
  default: return state
  }

}