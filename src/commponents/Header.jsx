// rfce . _rfce
import PropTypes from 'prop-types'; // impt TAB

// function Header(props) { we can destructure
function Header({ text, bgColor, textColor }) {
  const Headstyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={Headstyle}>
      {/* <h2>{props.text}</h2> */}
      <h2>{text}</h2>
    </header>
  );
}

// if nothing paased in the
// Header Propprites it will be added form here

Header.defaultProps = {
  text: 'feddBack Ui',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
