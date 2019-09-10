import React, { Component } from "react";
import "./style.scss";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  render() {

    const element2 = <FontAwesomeIcon icon={faFacebook} />
    const element3 = <FontAwesomeIcon icon={faLinkedin} />
    const element4 = <FontAwesomeIcon icon={faInstagram} />
    return (
      <footer className="container-fluid p-3 text-center">
        <section className="social-icons">

          
          <i>{element2}</i>
          <i>{element3}</i>
          <i>{element4}</i>
        </section>
        <div className="footer-copy text-center" />
      </footer>
    );
  }
}
export default Footer;