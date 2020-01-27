import React, { Component } from "react";//import DisplayData from '../DataSource/DisplayData';
import Data from "../ObjectData/ObjectDataSource";
import Styles from "./DataSource.module.css";
//import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class GetSourceData extends Component {
  state = {
    dataName: "",
    isParams: false,
    queryData: "",
    getObjectData: Data,
    showInputField: false
  };

  handleChange = data => {
    this.setState({
      dataName: data.gdc_DataExplorerDataName,
      queryData: data.gdc_DataExplorerDataQuery
    });
  };
  //this method will handel data edit event
  handleEdit = data => {
    this.setState({
      dataName: data.gdc_DataExplorerDataName,
      queryData: data.gdc_DataExplorerDataQuery,
      showInputField: true
    });
  };
  mySubmitHandler = event => {
    event.preventDefault();
    this.setState({
      dataName: event.target.value,
      queryData: event.target.value
    });
  };

  render() {
    //mapping through the object data that we get it from data source or  from API
    const mapObjectData = this.state.getObjectData.map(data => {
      return (
        <div key={data.gdc_DataExplorerDataID}>
          {/* {data.gdc_DataExplorerDataQuery} */}
          {data.gdc_DataExplorerDataName} &nbsp; &nbsp; &nbsp;
          <button
            className={Styles.Edit}
            onClick={event => {
              this.handleEdit(data, event);
            }}
          >
            Edit {data.gdc_DataExplorerDataName}
          </button>{" "}
          &nbsp;
          <button className={Styles.Edit} href="#">
            Delete
          </button>
        </div>
      );
    });
  
    return (
      <div>
        <Form onSubmit={this.mySubmitHandler}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>
              <strong>Name</strong>
            </Form.Label>
            <Form.Control
              //this.state.name  value is passed down here from dataSourceinput component
              type="text"
              value={this.state.dataName}
              name="dataName"
              onChange={this.handleChange}
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <strong>Query</strong>
            </Form.Label>
            <Form.Control
              //this.state.query  value is passed down here from dataSourceinput component
              as="textarea"
              rows="8"
              type="textarea"
              name="queryData"
              value={this.state.queryData}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              //this.state.isParams  value is passed down here from dataSourceinput component
              label="Params?"
              type="checkbox"
              name="paramsCheck"
              checked={this.state.paramsCheck}
              onChange={this.handleChange}
            />
          </Form.Group>
          <input type="submit"  className={Styles.Button}/>
        </Form>
        <br />
        {/* rendering form element values that passed down here from state change  */}
        {/* {displayDataInputPage} */}
        <button className={Styles.ALink} href="#">
          Create New DataSource
        </button>
        <br />
        <h4>Name</h4>
        {/* rendering data after we mapped object data source */}
        {mapObjectData}
      </div>
    );
  }
}
export default GetSourceData;
