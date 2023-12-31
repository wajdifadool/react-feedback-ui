import React, { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
// to use context we basicly import 2 thing
// the api and the context itself
import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';

function FeedBackItem({ item /*handleDelte*/ }) {
  // create function letiral
  // const handleClick = (item, handleDelte) => {
  //   console.log(item.id);
  //   // the click supouse to delete this item
  //   // but the items are not in this component !
  // };

  const { deleteFeedbackItem, editFeedback } = useContext(FeedBackContext);

  return (
    <Card>
      {/* they passed as childnre */}
      <div className="num-display">{item.rating}</div>
      {/* <button onClick={() => handleDelte(item)} className="close">
        <FaTimes color="purple" />
      </button> */}
      {/* Replaced With Context API  */}
      <button onClick={() => deleteFeedbackItem(item)} className="close">
        <FaTimes color="purple" />
      </button>
      <button
        //
        className="edit"
        onClick={() => editFeedback(item)}>
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
    // <>

    // {/* <div className="card">

    // </div> */}
    // </>
  );
}
FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
// function FeedBackItem() {
//     // we can see the states in comonent dev tools in the browser
//     // set the state
//     // we destructre of what the function retunr
//     const [rating, setRating] = useState(100);
//     const [text, setText] = useState('this is text ');

//     // define function
//     // state are imuatable
//     const handleClick = () => {
//       // setRating(1000);
//       setRating((prev) => {
//         return prev + 1;
//       });
//     };
//     return (
//       <>
//         <div className="card">
//           <div className="num-display">{rating}</div>
//           <div className="text-display">{text}</div>

//           {/* we can change the values of the state by calling the function   */}
//           <button onClick={handleClick}>Update</button>
//         </div>
//       </>
//     );
//   }
export default FeedBackItem;
