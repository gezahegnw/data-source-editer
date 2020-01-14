import React from "react";
import FormElement from './FormElement';
//import DisplayData from '../DataSource/DisplayData';
import Data from "../DataSource/DataObject";

class FromData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isParams: false,
      textarea: '',
      getData: Data
      
    };
    this.formHandleChange = this.formHandleChange.bind(this);
  }

  formHandleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const newData = this.state.getData.map((dataItem, index) => {
      return (
        <div >
          <p key={dataItem.gdc_DataExplorerDataID} >
            {dataItem.gdc_DataExplorerDataName} 
            {/* {data.gdc_DataExplorerDataQuery} */}
            </p>
        </div>
      );
      //<p>number: {} {data.number} </p>
      // <p>number: {data.gdc_DataExplorerDataIDr }</p>
      // <p>number:  {data.gdc_DataExplorerDataName} </p>
      // <p>number: {data.gdc_DataExplorerDataQuery} </p>
      // <p>number: {data.gdc_DataExplorerDataModel} </p>
    })
    return (
    <div>
  <FormElement
        changeForm={this.formHandleChange}
        name={this.state.name}
        isParams={this.state.isParams}
        textarea={this.state.textarea}
      />
     {newData}
    </div>
    
    );
  }
}
export default FromData;
