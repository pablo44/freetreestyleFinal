import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImgOverlay,
    Button
} from 'reactstrap';

function Gallery() {

    return (
        <Container>
            <Row className="mb-4">
                <Row >
                    <Col>

                        <Card invers className="bg-transparent">
                            <CardImg top width="100%" src={require('../images/mebel6.png')} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle>Inspiration</CardTitle>
                                <CardSubtitle>Our Ideas</CardSubtitle>
                                <CardText>As a team we strive for
                                        <br />
                                    better design from the very beginig
                                        <br />
                                    the card's content.</CardText>
                               
                            </CardImgOverlay>
                        </Card>
                    </Col>

                    <Col >
                        <Card invers className="bg-transparent">
                            <CardImg top width="100%" src={require('../images/mebel5.png')} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col>

                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>

                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row className="mb-4">
                <Row >
                    <Col>

                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="images/tvbank_but.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Inspiration</CardTitle>
                                <CardSubtitle>Our Ideas</CardSubtitle>
                                <CardText>As a team we strive for
                                        <br />
                                    better design from the very beginig
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col >
                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>

                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>

                        <Card className="bg-transparent">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on
                                        <br />
                                    the card title and make up the bulk of
                                        <br />
                                    the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>

    )

}

export default Gallery;
