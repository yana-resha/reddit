import React, { useState } from "react"

export type CommentContextType =  {
  value: string;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<CommentContextType>({
  value: '',
  onChange: () => {}
});



export function CommentContextProvider ({children, author}: {children: React.ReactNode, author?:string}) {
  
  const [commentValue, setCommentValue] = useState(`${author}, `);
  return (
    <commentContext.Provider value={{value: commentValue, onChange:setCommentValue}}>
      {children}
    </commentContext.Provider>
  )
}
