import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgcolor, textcolor }) {
  // either we can write props or destructure it and write { name }
  const headerStyle = {
    backgroundColor: bgcolor,                       // we can pass value of these prpoperty as props also
    color: textcolor,
  };

  return (
    // we can style a component in this way
    // <header style = {{backgroundColor : "blue", color: "red"}}>
    //instead of writing style in tag we can create component and used that component directly
    <header style={headerStyle}>
      <div className='container'>
        <h1>{text}</h1>
        {/* <h2>Hello</h2> */}
      </div>
    </header>
  );
}

//if not pass any props then we can code for default props also. It will change if we pass props in function
Header.defaultProps = {
  text: "Feedback UI",
  textcolor: "#ff6a95",
  bgcolor : "rgba(0,0,0,0.4)"
};

Header.prototype = {
  // text: PropTypes.string.isRequired            if props type is mentioned and required  then we can use isRequired
  text: PropTypes.bool,
};

export default Header;
