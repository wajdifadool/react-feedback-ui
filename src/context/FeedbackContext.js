import { createContext, useState, useEffect } from 'react';
import { FaChessKing } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

// passing childrnes
export const FeedBackPorvider = ({ children }) => {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  // states goes here
  // state Hooks
  const [feedback, setFeedBack] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    // console.log(data);
    setFeedBack(data);
    setIsLoading(false);
  };
  //   we move the function here so we have to pass it to the value object
  const deleteFeedbackItem = async (itemProp) => {
    if (window.confirm('are you sure you want to delete')) {
      await fetch(`/feedback/${itemProp.id}`, { method: 'DELETE' });

      setFeedBack(feedback.filter((item) => itemProp.id !== item.id));
    }
    // console.log('App', item.id);
  };

  const addFeedbackItem = async (newFeedBackItem) => {
    // post to the api
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedBackItem),
    });

    const data = await response.json();
    console.log('Post Item succseful new data added :', data);
    // add UUId to newFeedBackItem
    newFeedBackItem.id = uuidv4();

    console.log('App.js addFeedbackItem, newFeedBackItem:', newFeedBackItem);

    // we want to add it ti the feedback array
    // but state is imutable
    // thereFor we have to copy it and push to it
    // [...feedBack] = the three dot (spread operator) taking all the values in the
    // the ffeback array an copy it
    console.log('calculating new feed Back App.js');

    // Step 1: Create a copy of the feedBack array
    const updatedFeedBack = [...feedback];
    updatedFeedBack.push(newFeedBackItem);
    console.log(updatedFeedBack);
    setFeedBack(updatedFeedBack);
  };
  // set Item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      //
      item: item,
      isEditg: true,
    });
  };

  const updatedFeedback = async (id, upItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upItem),
    });
    // the updated item will be updated in the server
    // then we will get it back (the data )
    const data = await response.json();

    console.log('updatedFeedback', id, upItem);
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // handling edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    // the item wthat we want to edit
    item: {}, // an empty obejct by default
    // when editing the data will go in this item Object
    isEditg: false,
  });

  return (
    <FeedBackContext.Provider
      // evrey thing in the value could be extracted using
      // useContext in on the classes
      value={{
        feedback,
        deleteFeedbackItem,
        addFeedbackItem,
        editFeedback,
        feedbackEdit, // FORM COMPONENT // pass the object up to the form so we can edit it
        updatedFeedback,
        isLoading,
      }}>
      {/* and we warp the children 
      the components that need accses
      to our content  */}
      {children}
    </FeedBackContext.Provider>
  );
};

//export
export default FeedBackContext;
