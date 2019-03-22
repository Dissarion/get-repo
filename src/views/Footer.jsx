import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer_wrap">
        <h6 className="footer_stack">Написано на React, GraphQL, Apollo</h6>
        <a href="https://github.com/Dissarion" className="footer_author">
          Dissarion
        </a>
      </footer>
    );
  }
}

export default Footer;