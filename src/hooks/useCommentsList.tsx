import axios from "axios";
import {SetStateAction, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { RootState } from "../store/reducer";


interface IComments {
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

export function useCommentsList(id:string, subreddit:string) {
  let arrComments:any[] = [];
  const [data, setData] = useState(arrComments);
  const token = useSelector<RootState, string>(state => state.token.token);
  useEffect(() => {
  axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${id}/`, {
      headers: { Authorization: `bearer ${token}` },
    }).then(res => {
      const commentInfoArray = createComments(res.data[1].data.children) 
      setData(commentInfoArray)
    })
    .catch((err) => {
      console.log(err)
        })
  },[token])
      return data
}