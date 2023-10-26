import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // calcualte ratings avrage
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // adding regax to replace 0 with an empty string
  avg = avg.toFixed(1).replace(/[.,]0$/, ''); // 1 decimal place toFixed

  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews</h4>
      <h4> Avrage Rating {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
