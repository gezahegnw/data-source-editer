import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormElement = props => {
  return (
    <div>
      <Form >
        <Form.Group controlId="formGroupEmail">
          <Form.Label><strong>Name</strong></Form.Label>
          <Form.Control 
          //props.name  value is passed down here from dataSourceinput component
          type="text"
          value={props.name}
          name="name"
          onChange={props.changeForm}
           placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><strong>Query</strong></Form.Label>
          <Form.Control 
          //props.query  value is passed down here from dataSourceinput component
            as="textarea" rows="8" 
            type='textarea'
            name='query'
            value={props.query}
            onChange={props.changeForm} 
            />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check  
          //props.isParams  value is passed down here from dataSourceinput component
             label="Params?" 
             type="checkbox" 
             name="paramsCheck"
             checked={props.paramsCheck}
             onChange={props.changeForm}
             />
        </Form.Group>
        <Button variant="outline-secondary" onClick={() => console.log('button clicked')}>Submit</Button>
      </Form>
      {/* <h3>Name: {props.name}</h3> */}
      {/* <h3>Params: {props.paramsCheck ? "YES" : null}</h3> */}
      {/* <p> <strong>Textarea: </strong>{props.query}</p> */}
  </div>
  );
};

export default FormElement;
