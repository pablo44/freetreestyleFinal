/*import React, {Component} from "react";
import ReactDOM from "react-dom";

class OrderFurniture extends Component {
    constructor () {
        super()
        this.state={};
    }
    render() {
        return(
            <p>Zamow mebel</p>
        )
    }
}
export default OrderFurniture;
*/
import React, {Component}from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class OrderFurniture extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
      }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="your e-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Color</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>brown</option>
            <option>white</option>
            <option>natural wood</option>
            
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select dimention</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1 standard</option>
            <option>2 customised</option>
           
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Write your description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        <FormGroup tag="fieldset">
          <legend>Wood Materials</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Oak
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Walnut
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Pine
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            ready!
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
export default OrderFurniture;