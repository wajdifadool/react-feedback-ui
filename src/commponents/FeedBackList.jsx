import React from 'react';
import FeedBackItem from './FeedBackItem';
import Spinner from './shared/Spinner';
import PropTypes from 'prop-types';
// updating to context api
import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';

import { motion, AnimatePresence, animate } from 'framer-motion';

// {
// props moved after used the context API
/* feedback,*/
/*handleDelte*/
// }
function FeedbackList() {
  // we dont need to pass the feedback as prop
  // we now use useContext and cooment the porp feedback

  // we can extract what ever we want from FeedBackContext hook
  // hence its wraped in APP.js with <FeedBackPorvider>
  const { feedback, isLoading } = useContext(FeedBackContext);
  console.log('FeedbackList.jsx calledbuubling !!');
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p> No feedBack YET!</p>;
  }

  if (isLoading === true) return <Spinner />;
  // now we want to loop the feedback array and
  // show each item in card
  else {
    return (
      <div>
        <div className="feedbackList-head">
          <h1>Items</h1>
        </div>
        <AnimatePresence>
          {feedback.map((item) => {
            // return <div> {item.id} </div>;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <FeedBackItem
                  key={item.id}
                  item={item}
                  //  its like we pass the function as a prop to the
                  // FeedBackItem item, and when it get invoked in the FeedBackItem item it will
                  // be called in here
                  // handleDelte={(item) => console.log(item.id)}

                  // pass it to the App
                  // but we get the handle delete from the App as a prop

                  /*handleDelte={handleDelte} Moved to ContextAPI*/
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }
}

FeedbackList.propTypes = {
  // feedback: PropTypes.array, or we can
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
