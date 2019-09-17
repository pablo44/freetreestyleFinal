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


function StartPage() {

    return (
        <div>
<div className="bg-image"></div>
            <Container fluid={true} className="mainpage">


                <Row>
                    <Col>
                        <aside className="filter-aside">
                            <h3 className="mb-3 mt-4">Choose a furniture</h3>
                            <p>1pic</p>
                            <br />
                            <p>2pic</p>
                            <br />
                            <p>3pic</p>
                        </aside>
                    </Col>
                    <Col >
                        <Row className="mb-4">
                            <Row >
                                <Col>

                                    <p >Mitt äventyr med formgivning började tillsamans med min familji liv.
                                      När jag funderade på vilka saker som behövs hemma då plotsligt insåg jag att
                                      det kan jag själv göra samt renovera många av de. Och när jag tåg det första
                                      steget blev jag förälskad och kunde känna mig fri! Efter då kom trä som materialet,
                                      första renoverings objekter var ganska enkla, decoupage var den viktigt del av
                                        hela processen.</p>
                                </Col>

                                <Col >
                                    <p> Samtidigt med finsnickeri utvecklade jag mina kunskaper inom inrednig design öven smycken.
                                        Till sist började jag den viktigasta delen av min väg , en utbildning inom finsnickeri
                                        och formgivning. Under tiden kunde jag laborera med olika tekniker s.som.: epoxy,
                                        båt lack och betsa. Efter 2,5 år kunde jag uveckla mina drömer och nu får jag vidare
                                        förverkliga mina ideer. </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>





                </Row>

                <Row className="mb-4">
                    <Row >
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/tvbank_but.png')} alt="CardTvBank" />
                                <CardBody>
                                    <CardTitle>Inspiration</CardTitle>
                                    <CardSubtitle>Our Ideas</CardSubtitle>
                                    <CardText>As a team we strive for
                                        <br />
                                        better design from the very beginig
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col >
                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/BarIkon.png')} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Technology</CardTitle>
                                    <CardSubtitle>Workshop</CardSubtitle>
                                    <CardText>As a team we strive for <br />
                                       
                                        better design from the very beginig
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/Card1tvbank.png')} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>'Our policy</CardTitle>
                                    <CardSubtitle>we do</CardSubtitle>
                                    <CardText>know how
                                        </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>

                            <Card className="bg-transparent">
                                <CardImg top width="100%" src={require('../images/cheesXs.png')} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Order</CardTitle>
                                    <CardSubtitle>Unique</CardSubtitle>
                                    <CardText>some design that makes...mh
                                        </CardText>
                                    <Button>Button</Button>
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











