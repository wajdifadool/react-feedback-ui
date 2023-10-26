import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

function FeedbackForm({ handleAdd }) {
  // our Hooks
  const [text, setText] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10); // rating
  const [message, setMessage] = useState('');

  // we conenct
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
      handleAdd(newFeddbackItem);

      // clear text after sumbition
      setText('');
      setbtnDisabled(true);
      setRating(10);
      // @todo - add ui indicating user added
    } // end of if
  }; // end of handleSubmit
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>hHow would you rate our service with us ? </h2>
        <RatingSelect
          selectFunction={(rating) => {
            console.log(
              'FeedBackForm.jsx Card,SelectFunctio m rating= ',
              rating
            );
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
