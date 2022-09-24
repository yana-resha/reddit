import React from "react"
import { useCommentsList } from "../../hooks/useCommentsList"

export const commentList = React.createContext([{}])

export function CommentListProvider ({children, postID, subreddit}: {children: React.ReactNode, postID:string, subreddit:string}) {
  let data = useCommentsList(postID, subreddit)
  return (
    <commentList.Provider value={data}>
      {children}
    </commentList.Provider>
  )
}