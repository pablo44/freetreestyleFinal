import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function  CardTemplate (props) {
  return (
    <div>
      <Card>
        <CardImg src={props.imgUrl} />
        <CardBody>
          <CardTitle cardtitle= {props.text}/>
          <CardSubtitle subtitle={props.cardsubtitle}/>
          <CardText cardtext={props.cardtext}/>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter (CardTemplate);