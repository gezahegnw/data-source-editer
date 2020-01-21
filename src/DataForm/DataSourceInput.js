import React from "react";
import FormElement from './FormElement';
//import DisplayData from '../DataSource/DisplayData';
import Data from "../DataSource/ObjectData";
import Styles from './DataSource.module.css'

class DataSourceInputForm extends React.Component {
    state = {
      dataName: "",
      isParams: false,
      queryData: "",
      getObjectData: Data,
      showInputField: false
    }
 
//this method  will handel deleting event
  deleteHandler = (id) => {
    
  }
  //this method will handel from submit 
  formChangeHandle(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  //this method will handel data edit event
  handleEdit = (data) => {
      this.setState({
        dataName: data.gdc_DataExplorerDataName,
        queryData: data.gdc_DataExplorerDataQuery,
        showInputField: true
      })
  }

  render() {
    //mapping through the object data that we get it from data source or  from API
    const mapObjectData = this.state.getObjectData.map((data) => {
      return (
          <div key={data.gdc_DataExplorerDataID} >
            {/* {data.gdc_DataExplorerDataQuery} */}
            {data.gdc_DataExplorerDataName} &nbsp; &nbsp; &nbsp;
            <a 
              className={Styles.Edit}
              href="#"
              onClick={(event) => {this.handleEdit(data, event)
            }}
          >Edit {data.gdc_DataExplorerDataName}</a> &nbsp;
          <a className={Styles.Edit} href='#' >Delete</a>
        </div>
      );
    })
    //this will show or hide the input field depending on the state change . 
    const showInputPage = this.state.showInputField;
   const displayInputPage  = showInputPage ? <FormElement
          changeFormData={this.formChangeHandle}
          name={this.state.dataName}
          paramsCheck={this.state.isParams}
          query={this.state.queryData}
        /> : this.state.showInputField;
    return (
    <div>
       {/* rendering form element values that passed down here from state change  */}
    { displayInputPage  }
  {/* <FormElement
  //rendering form element values that passed down here from state change 
        changeFormData={this.formChangeHandle}
        name={this.state.dataName}
        params={this.state.isParams}
        query={this.state.queryData}
      /> */}
      
      <a className={Styles.ALink } href='#'>Create New DataSource</a>
      <h4>Name</h4>
      {/* rendering data after we mapped object data source */}
        {mapObjectData}
     
    </div>
    
    );
  }
}
export default DataSourceInputForm;
