import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { TextField } from "@material-ui/core";


class DiabetesPedgreeFunction extends React.Component {
    constructor(props) {
      super(props);
      this.state = { inputValue: "" };
      this._handleUpdate = this._handleUpdate.bind(this);
      this._reset = this._reset.bind(this);
    }
    
    _handleUpdate(e) {
      if (e.target.validity.valid) {
        this.setState({ inputValue: e.target.value }); 
      }
    }
  
    _reset() {
      this.setState({ inputValue: "" }); 
    }
    
    render() {
      return (
            <TextField fullWidth={true} name="diabetesPedgreeFunction" type="number" label="DPF" value={this.state.inputValue} onChange={this._handleUpdate} step="any"  required/>
      )
    }  
  }  

  export default DiabetesPedgreeFunction;
  


