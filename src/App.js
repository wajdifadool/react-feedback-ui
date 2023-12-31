// main app component
// could be clases or functions
// basicly we use hooks not classes
// import FeedBackItem from './commponents/FeedBackItem';  // no need for it
import Header from './commponents/Header';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FeedbackData from './data/feedbackData';
import FeedbackList from './commponents/FeedBackList';
import Card from './commponents/shared/Card';
import FeedbackStats from './commponents/FeedbackStats';
import FeedbackForm from './commponents/FeedbackForm';
import AboutPage from './pages/About';
import AboutIconLink from './commponents/AboutIconLink';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedBackPorvider } from './context/FeedbackContext';

function App() {
  // now its visiblae in the state components in browser dev tools
  // const [feedBack, setFeedBack] = useState(FeedbackData); movedTO ContextAPI

  // any thing conected to the feedback ,
  // when feedback changes, all componet  attach to it will change

  /**
   * Moved to FeedBack Contex 
     const deleteFeedbackItem = (itemProp) => {
    if (window.confirm('are you sure you want to delete')) {
      setFeedBack(feedBack.filter((item) => itemProp.id !== item.id));
    }
    // console.log('App', item.id);
  };
  */

  /*
  moved TO ContextApi
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
    const updatedFeedBack = [...feedBack];
    updatedFeedBack.push(newFeedBackItem);
    console.log(updatedFeedBack);
    setFeedBack(updatedFeedBack);
  };
*/
  // we return jsx: javascript xml
  // this is just syntactic sugar
  return (
    // sourend with context provider
    <FeedBackPorvider>
      <Router>
        <Header text={'FeedBack UI Demo'} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm
                  // handleAdd={addFeedbackItem}
                  />
                  <FeedbackStats
                  // feedback={feedBack}
                  />
                  {/* <FeedBackItem /> */}
                  <FeedbackList
                  // feedback={feedBack} no need now we useContext()
                  // handleDelte={deleteFeedbackItem}
                  />
                  {/* <Card> Hello World </Card> */}
                </>
              }></Route>
          </Routes>
          {/* Creating route */}
          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedBackPorvider>
  );
}

//  the old way

// import React from 'react';

// function App() {
//   // we return jsx: javascript xml
//   //
//   return React.createElement(
//     'div',
//     { className: 'container' },
//     React.createElement('h1', {}, 'My app')
//   );
// }
export default App;
