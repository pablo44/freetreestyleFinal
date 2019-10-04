import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';

function Gallery() {


     return (
        <Carousel>
        <Carousel.Item>
          <img
            className=".d-block  w-100"
            src={require('../images/bar.jpg')}
            alt="First slide"
            // style={{ height:680, width:600 }}
           
          />
          <Carousel.Caption>
            <h3>Bar</h3>
            <p>Organic-style modern bar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/chair1.jpg')}
            alt="Third slide"
            // style={{ height:680 }}
          />
      
          <Carousel.Caption>
            <h3>chair</h3>
            <p>oak chair in natural oil coate</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/chair2.jpg')}
            alt="Third slide"
            // style={{ height:680 }}
          />
      
          <Carousel.Caption>
            <h3>chair</h3>
            <p>oak chair in natural oil coate</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/guitarBoard.jpg')}
            alt="First slide"
            // style={{ height:680 }}
          />
          <Carousel.Caption>
            <h3>coffe table</h3>
            <p>varnished and stained coffe table</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/guitarBoard2.jpg')}
            alt="First slide"
            // style={{ height:680 }}
          />
          <Carousel.Caption>
            <h3>coffe table</h3>
            <p>varnished and stained coffe table</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/sariboard.jpg')}
            alt="First slide"
            // style={{ height:680 }}
          />
          <Carousel.Caption>
            <h3>chees coffe table</h3>
            <p>chees inspired coffe table</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/tv_benk.jpg')}
            alt="First slide"
            // style={{ height:680 }}
          />
          <Carousel.Caption>
            <h3>tv bench</h3>
            <p>tv bench witch walnuts filling</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/tvbank_green.jpg')}
            alt="First slide"
            // style={{ height:680}}
          />
          <Carousel.Caption>
            <h3>tv bench</h3>
            <p>tv bench witch gren oak filling</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        )

    }
    
    export default Gallery;
    //     <Container>
    //         <Row className="mb-4">
    //             <Row >
    //                 <Col>

    //                     <Card invers className="bg-transparent">
    //                         <CardImg top width="100%" src={require('../images/mebel6.png')} alt="Card image cap" />
    //                         <CardImgOverlay>
    //                             <CardTitle>Inspiration</CardTitle>
    //                             <CardSubtitle>Our Ideas</CardSubtitle>
    //                             <CardText>As a team we strive for
    //                                     <br />
    //                                 better design from the very beginig
    //                                     <br />
    //                                 the card's content.</CardText>
                               
    //                         </CardImgOverlay>
    //                     </Card>
    //                 </Col>

    //                 <Col >
    //                     <Card invers className="bg-transparent">
    //                         <CardImg top width="100%" src={require('../images/mebel5.png')} alt="Card image cap" />
    //                         <CardImgOverlay>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
                                
    //                         </CardImgOverlay>
    //                     </Card>
    //                 </Col>
    //                 <Col>

    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //                 <Col>

    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //         </Row>
    //         <Row className="mb-4">
    //             <Row >
    //                 <Col>

    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="images/tvbank_but.png" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Inspiration</CardTitle>
    //                             <CardSubtitle>Our Ideas</CardSubtitle>
    //                             <CardText>As a team we strive for
    //                                     <br />
    //                                 better design from the very beginig
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>

    //                 <Col >
    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //                 <Col>

    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //                 <Col>

    //                     <Card className="bg-transparent">
    //                         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //                         <CardBody>
    //                             <CardTitle>Card title</CardTitle>
    //                             <CardSubtitle>Card subtitle</CardSubtitle>
    //                             <CardText>Some quick example text to build on
    //                                     <br />
    //                                 the card title and make up the bulk of
    //                                     <br />
    //                                 the card's content.</CardText>
    //                             <Button>Button</Button>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //         </Row>
    //     </Container>

   
