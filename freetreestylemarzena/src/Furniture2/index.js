import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';


class Furniture2 extends Component {

    // constructor(){
    //     super()
    // }

    render() {
        return (
            <div>
                <div className="bg-image"></div>
                <Container fluid={true} className="mainpage">

                    <Row>
                        <Col>
                            <img src={require("../images/tv_benk.jpg")} alt="paulZdj" />
                        </Col>
                        <p> My design adventure began together with my family's life.
                                I begun thinking about what things we need in our household
                            and suddenly I realized that I can do many tings on my own.
                            I took the first step, I fell in love in woodworking, first
                            I always remember that smell of wood in my ouncle's workshop.
                            First renovation objects were quite simple, decoupage
                            was the important part of the whole introductory process.
                        </p>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Furniture2;