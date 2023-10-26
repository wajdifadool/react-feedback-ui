import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>this is demo about page</p>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
    </div>
  );
}

export default About;
