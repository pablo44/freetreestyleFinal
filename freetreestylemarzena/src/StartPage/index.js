import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


function StartPage() {

    return (
        <div>
<div className="bg-image"></div>
            <Container fluid={true} className="mainpage">


                <Row>
                    <Col>
                        <aside className="filter-aside">
                            <h3 className="mb-3 mt-4">Choose a furniture</h3>
                            <Link to="/furniture1"><img src={require('../images/button1.png')}/></Link>
                            <br />
                            <br />
                            <Link to="/furniture2"><img src={require('../images/button2.png')}/></Link>
                            <br />
                            <br />
                            <Link to="/furniture3"><img src={require('../images/button3.png')}/></Link>
                            <br />
                        </aside>
                    </Col>
                    <Col >
                        <Row className="mb-4">
                            <Row  >
                                <Col>

                                    <p>My design adventure began together with my family's life.
                                        I begun thinking about what things we need in our household
                                        and suddenly I realized that I can do many tings on my own.
                                        I took the first step, I fell in love in woodworking, first
                                        I always remember that smell of wood in my ouncle's workshop.
                                        First renovation objects were quite simple, decoupage
                                        was the important part of the whole introductory process.</p>
                                </Col>

                                <Col>
                                    <p> Together with fine carpentry, I developed my interior design
                                        skills,Finally, I began the most important part of my journey,
                                        an education in fine carpentry and design. In the meantime,
                                        I could experiment with different techniques such as epoxy, and
                                        finaly after two and a halv years carpentry education I was able
                                        to begin realise my dreams!
                                         </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>





                </Row>

                <Row className="mb-4 cards">
                    <Row >
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/leaf.jpg')} alt="CardTvBank" />
                                <CardBody className = "bg-transparent card text-center">
                                    <CardTitle>Inspiration</CardTitle>
                                    <CardSubtitle>Our Ideas</CardSubtitle>
                                    <CardText>
                                        
                                    </CardText>
                                    <Button>Check out!</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col >
                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/technology.jpg')} alt="Card image cap" />
                                <CardBody className = "bg-transparent card text-center">
                                    <CardTitle>Technology</CardTitle>
                                    <CardSubtitle>Workshop and team</CardSubtitle>
                                    <CardText> 
                                    </CardText>
                                    <Button>Check out!</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/mebel6.png')} alt="Card image cap" />
                                <CardBody className = "bg-transparent card text-center">
                                    <CardTitle>Our policy</CardTitle>
                                    <CardSubtitle>know how</CardSubtitle>
                                    <CardText>
                                        </CardText>
                                    <Button>Check out!</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/crowd.jpg')} alt="Card image cap" />
                                <CardBody className = "bg-transparent card text-center">
                                    <CardTitle>Customers</CardTitle>
                                    <CardSubtitle>design and order</CardSubtitle>
                                    <CardText>
                                        </CardText>
                                    <Button>Check out!</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
            
        </div>
    );
}

export default StartPage;











