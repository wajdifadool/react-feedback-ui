import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  //   we move the function here so we have to pass it to the value object
  const deleteFeedbackItem = (itemProp) => {
    if (window.confirm('are you sure you want to delete')) {
      setFeedBack(feedback.filter((item) => itemProp.id !== item.id));
    }
    // console.log('App', item.id);
  };

  const addFeedbackItem = (newFeedBackItem) => {
    // add UUId to newFeedBackItem
    newFeedBackItem.id = uuidv4();

    console.log('APp.js addFeedbackItem, newFeedBackItem:', newFeedBackItem);

    // we want to add it ti the feedback array
    // but state is imutable
    // thereFor we have to copy it and push to it
    // [...feedBack] = the three dot (spread operator) taking all the values in the
    // the ffeback array an copy it
    console.log('calculating new feed Back APp.js');

    // Step 1: Create a copy of the feedBack array
    const updatedFeedBack = [...feedback];
    updatedFeedBack.push(newFeedBackItem);
    console.log(updatedFeedBack);
    setFeedBack(updatedFeedBack);
  };
  return (
    <FeedBackContext.Provider
      // evrey thing in the value could be extracted using
      // useContext in othe classes
      value={{
        feedback,
        deleteFeedbackItem,
        addFeedbackItem,
      }}>
      {/* and we warp the children 
      
        the components that need accses to our content  */}
      {children}
    </FeedBackContext.Provider>
  );
};

//export
export default FeedBackContext;
