import React, { useState } from "react"

type RepliesContextType = {
  defaultValue: string;
  onChange: (value: string) => void;
}

export const repliesCommentContext = React.createContext<RepliesContextType>({
  defaultValue: '',
  onChange: () => {}
});

export function RepliesCommentContextProvider ({children, author}: {children: React.ReactNode, author?:string}) {
  
  const [repliesValue, setRepliesValue] = useState(`${author}, `);
  return (
    <repliesCommentContext.Provider value={{defaultValue: repliesValue, onChange: setRepliesValue}}>
      {children}
    </repliesCommentContext.Provider>
  )
}

// export const repliesCommentContext = React.createContext<CommentContextType>({
//   value: '',
//   onChange: () => {}
// });

// export function RepliesCommentContextProvider ({children, author}: {children: React.ReactNode, author?:string}) {
  
//   const [repliesValue, setRepliesValue] = useState(`${author}, `);
//   return (
//     <repliesCommentContext.Provider value={{value: repliesValue, onChange:setRepliesValue}}>
//       {children}
//     </repliesCommentContext.Provider>
//   )
// }