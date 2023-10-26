import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
// <Link to="/about">
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/about',
          // search: '?sort=name',
          // hash: 'hello',
          // https://www.semrush.com/blog/url-parameters/
        }}
        // we can but an object
        // we can send send quires params
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
