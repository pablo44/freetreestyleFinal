import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardTemplate = (props) => {
  return (
    <div>
      <Card>
        <CardImg src={props.imgUrl} />
        <CardBody>
          <CardTitle CardTitle= {props.text}/>
          <CardSubtitle subtitle={props.CardSubtitle}/>
          <CardText CardText={props.CardText}/>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter (CardTemplate);