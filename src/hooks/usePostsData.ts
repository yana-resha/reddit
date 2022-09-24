import {SetStateAction, useContext, useEffect, useState } from "react";
import axios from "axios";
import { commentContext } from "../shared/Context/commentContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";




interface IPost {
  after?: string;
  author?: string;
  postTitle?: string;
  postImg?: string;
  postLink?: string;
  postCreated?:string;
  icon?:string;
  postID?:string;
  userLink?:string;
  subreddit?:string;
  karmaCount?:number;
}

interface IAfter {
  after: string;
}

export function usePostsData () {
  
  let arrPosts:IPost[] = [];
  let dataObj = {after: '', loading: false, errorMessage: '', posts: arrPosts};
  const [data, setData] = useState(dataObj);
  const token = useSelector<RootState, string>(state => state.token.token);
  
  useEffect(() => {
    if (token.length > 0 && token !== 'undefined') {
    dataObj.loading = true;
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
      headers: { Authorization: `bearer ${token}` },
    })
      .then((resp) => {
        const postsData = resp.data.data.children;
        
        dataObj.after = resp.data.data.after;
        postsData.forEach((obj:any) => {

          let newobj:IPost = {
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
          };
          arrPosts.push(newobj)
        });
        setData(dataObj);
      })
      .catch((err) => {
        dataObj.errorMessage = err;
        setData(dataObj);
      })
      .finally(() => {
        dataObj.loading = false;
        setData(dataObj);
      })
   }
  }, [token]);
  return data
}
