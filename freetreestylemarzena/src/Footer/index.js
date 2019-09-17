import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col} from 'reactstrap';
import "./style.scss";

class Footer extends Component {
  render() {

    const element1 = <FontAwesomeIcon icon={faFacebook} />
    const element2 = <FontAwesomeIcon icon={faLinkedin} />
    const element3 = <FontAwesomeIcon icon={faInstagram} />
    return (
      
      <Container fluid={true}  className="footer">

      <Row className="align-items-center">

          <Col lg="4" className="footer-text">

              <p>Norrtäljegatan 3</p>
              <p>214 29 Malmö</p>
              <p>073564732</p>
              <p>marzena@sverige.nu</p>
              
          </Col>

          <Col lg="4">

          <img src={require("../images/logomarsena.png")} alt="logomarseny"/>
          <br/>
              <span className="logo-text">FreeTreeStyle</span>

          </Col>

          <Col lg="4" className="social-icons">

              <i className="icon">{element1}</i>
              <i className="icon">{element2}</i>
              <i className="icon">{element3}</i>

          </Col>

      </Row>
  </Container>

);
}
}

export default Footer;