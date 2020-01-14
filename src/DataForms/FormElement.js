import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormElement = props => {
  return (
    <div>
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label><strong>Name</strong></Form.Label>
    <Form.Control 
    type="text"
    value={props.name}
    name="name"
    placeholder=""
    onChange={props.changeForm}
     placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><strong>Query</strong></Form.Label>
    <Form.Control 
      as="textarea" rows="8" 
      type='textarea'
      name='textarea'
      value={props.textarea}
      onChange={props.changeForm} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check  
      label="Params?" 
       type="checkbox" 
       name="isParams"
       checked={props.isParams}
       onChange={props.changeForm}
       />
       
  </Form.Group>
  <Button variant="outline-secondary">Submit</Button>
</Form>
    <h3>Name: {props.name}</h3>
    <h3>Params: {props.isParams ? "YES" : null}</h3>
    <p> <strong>Textarea: </strong>{props.textarea}</p>
</div>
    // <main>
    //   <form>
    //     <br />
    //     <h3>Name</h3>
    //     <br />
    //     <input className='input'
    //       type="text"
    //       value={props.name}
    //       name="name"
    //       placeholder=""
    //       onChange={props.changeForm}
    //     />
    //     <br />
    //     <br />
       
    //     <label>
    //      <strong>Query</strong> 
    //      <br />
    //       <textarea 
    //         type='textarea'
    //         name='textarea'
    //         value={props.textarea}
    //         onChange={props.changeForm} />
    //     </label>
    //     <br />
    //     <br />
    //     <label>
    //        <strong>Params?</strong> 
    //       <input
    //         type="checkbox"
    //         name="isParams"
    //         checked={props.isParams}
    //         onChange={props.changeForm}
    //       />
    //     </label>
    //     <br />
    //     <br />
    //     <button className="button">Submit</button>
    //   </form>
    //       <h3>Name: {props.name}</h3>
    //     <h3>Params: {props.isParams ? "YES" : "NO"}</h3>
    // </main>
    
  );
};

export default FormElement;
