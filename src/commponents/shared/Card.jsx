import React from 'react';
// import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';

// this is card basicly just ui template
// we passs the feed back item children
// then add thme here
function Card({ children, reverse }) {
  //   return <div className="card reverse">{children}</div>;
  // how to do conditinal class
  // return <div className={`card ${reverse && `reverse`}`}>{children}</div>;
  //
  // this is how we add conditinal class
  // basicaly binary operator
  // ${reverse && `reverse`}
  //
  // how to do conditinal styling
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}>
      {children}
    </div>
    // if stement ? then : else
  );
}

// props
Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
