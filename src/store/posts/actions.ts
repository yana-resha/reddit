import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { ICardListPosts } from "../../shared/CardsList";
import { RootState } from "../reducer";

export interface IComments {
  author?:string;
  commentText?:string;
  created?:number;
  id?:string;
  parent_id?:string;
  ups?:number;
  replies?: IComments[];
}

export function createComments(arr: object[]) {
  return arr
  .filter((obj:any) => obj.kind !== 'more')
  .map((obj: any) => {
    let commentObject:IComments = {
      author: obj.data.author,
      commentText: obj.data.body,
      created: obj.data.created,
      id: obj.data.id,
      parent_id: obj.data.parent_id,
      ups: obj.data.ups,
      replies: [],
    };
    obj.data.replies ? commentObject.replies =  createComments(obj.data.replies.data.children) : commentObject.replies = [];
    return commentObject
  })
}

// fetch
export const POSTS_REQUEST = 'POSTS_REQUEST';

export type PostsRequestAction = {
  type: typeof POSTS_REQUEST
}

export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_REQUEST,
})

// success
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  after: string;
  data:  ICardListPosts[];
  load: number;
}

export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: ICardListPosts[], after: string, load: number) => ({
  type: POSTS_REQUEST_SUCCESS,
  after,
  load,
  data,
})

// error

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
}

export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
})

export const postsRequestAsync = (load: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  let arrPosts:ICardListPosts[] = getState().posts.data;
  
  if (getState().token.token.length > 0 && getState().token.token !== 'undefined') {
    dispatch(postsRequest());
    let lastPosts = getState().posts.after;
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
      headers: { Authorization: `bearer ${getState().token.token}` },
      params: {
                limit: 10,
                after: lastPosts,
              }
    })
    .then((response) => {
      const postsData = response.data.data.children;
      const after = response.data.data.after;
      
      postsData.forEach((obj:any) => {
        let newobj = {
          author: obj.data.author,
          postTitle: obj.data.title,
          postImg: obj.data.thumbnail,
          postLink: obj.data.url,
          postCreated: obj.data.created,
          icon: obj.data.sr_detail.icon_img,
          postID: obj.data.id,
          userLink: obj.data.url_overridden_by_dest,
          karmaCount: obj.data.ups,
          subreddit: obj.data.subreddit,
          comments: [],
        };
        arrPosts.push(newobj)
      });
      
      let arrComments:any[] = [];
      arrPosts.forEach(obj => {
        axios.get(`https://oauth.reddit.com/r/${obj.subreddit}/comments/${obj.postID}/`, {
          headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
        })
        .then(res => {
          const commentInfoArray = createComments(res.data[1].data.children) 
          arrComments = commentInfoArray;
        })
        .catch((err) => {
          dispatch(postsRequestError(String(err)))
        })
        .then(() => {
          obj.comments = arrComments;
        })
        .then(() => {
          dispatch(postsRequestSuccess(arrPosts, after, load));
        })
      })
      
      return [after, arrPosts]
    })
  }    
}