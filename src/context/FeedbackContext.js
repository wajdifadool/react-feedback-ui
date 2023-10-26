import { createContext, useState } from 'react';

const FeedBackContext = createContext();

// passing childrnes
export const FeedBackPorvider = ({ children }) => {
  // states goes here
  // state Hooks
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: 'item  from context',
      rating: 10,
    },
  ]);

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
      }}>
      {/* and we warp the children 
      
        the components that need accses to our content  */}
      {children}
    </FeedBackContext.Provider>
  );
};

//export
export default FeedBackContext;
