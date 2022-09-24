import React, { Children } from "react";
import { usePostsData } from "../../hooks/usePostsData";




export const postsContext = React.createContext({});

export function PostsContextProvider({children}) {
  const data = usePostsData();
  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}
