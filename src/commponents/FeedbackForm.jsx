import React from 'react';

import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

// App driling replaced with ContextApi
import { useContext, useEffect, useState } from 'react';
import FeedBackContext from '../context/FeedbackContext';

function FeedbackForm() {
  // { handleAdd }
  // our Hooks
  const [text, setText] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10); // rating
  const [message, setMessage] = useState('');

  const { addFeedbackItem, feedbackEdit, updatedFeedback } =
    useContext(FeedBackContext);

  // use Effect to handle each time the feedbackEditObject will be effected
  // by user clicking in the edit button hence this object is hooked using Context
  useEffect(() => {
    // it will get called when the componnets loads
    // it is good for http calls for loading data in first run
    console.log('useEffect');
    console.log(feedbackEdit.isEditg);

    if (feedbackEdit.isEditg === true) {
      console.log(feedbackEdit.isEditg);
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  // second argumnet meaning its dependcy that  if  whats so ever in the
  // dependcy array changes ,, the use effect will run
  // if its empty it will just run when the component lodas

  // Text input on Change
  // porpuse is to Update the TExt for the feedback item
  //porpuse is to handle UI and validation
  const handleTextChange = (event) => {
    // console.log(event.target.value);
    if (text === '') {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    // setTextHook
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make sure at least 10 chars are found
    if (text.trim().length > 10) {
      const newFeddbackItem = {
        // change to pojo

        text: text,
        rating: rating,
      };
      // handleAdd in App js get called from here , app driling end here
      // handleAdd(newFeddbackItem) ; // replacecd With Context API
      if (feedbackEdit.isEditg) {
        updatedFeedback(
          //
          feedbackEdit.item.id,
          newFeddbackItem
        );
      } else addFeedbackItem(newFeddbackItem);

      // clear text after sumbition
      setText('');
      setbtnDisabled(true);
      setRating(10);
      // @todo - add ui indicating the user that feedBack has been added
    } // end of if
  }; // end of handleSubmit
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with us ?</h2>
        <RatingSelect
          selectFunction={(rating) => {
            console.log(
              'FeedBackForm.jsx Card,SelectFunctio m rating= ',
              rating
            );
            // by default the Rating is set to 10
            setRating(rating); // set the default rating
          }}
          selected={rating}
        />

        <div className="input-group">
          <input
            // adding an event
            onChange={handleTextChange}
            type="text"
            name=""
            placeholder="write a review"
            id=""
            value={text}
            // we add the value here via hook state so we can
            // get target.value
            // basicly its form hook state
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message"> {message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
