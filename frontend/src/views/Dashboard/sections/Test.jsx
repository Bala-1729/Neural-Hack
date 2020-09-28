import React from "react"
import MaterialTable from 'material-table';

import axios from "axios";
const token=localStorage.getItem('token')

const column = [
    { title: 'Patient Name', field: 'patientName', align:'center'},
    { title: 'Patient Id', field: 'id', align:'center'},
    { title: 'Pregnancies', field: 'pregnancies', align:'center'},
    { title: 'Glucose', field: 'glucose', align:'center'},
    { title: 'Blood Pressure', field: 'bloodPressure', align:'center'},
    { title: 'Skin Thickness', field: 'skinThickness', align:'center'},
    { title: 'Insulin', field: 'insulin', align:'center'},
    { title: 'BMI', field: 'bmi', align:'center'},
    { title: 'Diabetes Pedgree Function', field: 'diabetesPedgreeFunction', align:'center'},
    { title: 'Age', field: 'age', align:'center'},
    { title: 'Result', field: 'Result', align:'center'},
];

let rows=[]


export default function Test() {
  const Load = (e) => {
    axios
      .get("http://localhost:8000/api/medicalData/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
       console.log(res.data.medicalData);
       rows=res.data.medicalData
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
      <div>
      {Load()}
      <MaterialTable
        title="Patients Data History"
        style={{ borderRadius:"10px"}}
        columns={column}
        data={rows}        
        options={{
          exportButton: true,
          search: true,
          headerStyle:{
              color:"white",
              background: "linear-gradient(60deg, #00b0e0, #3490de)",
              boxShadow:"0 12px 20px -10px rgba(52, 144, 222, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.6), 0 7px 10px -5px rgba(52, 144, 222, 0.5)"
          },
          rowStyle:{
              backgroundColor:"#EEE"
          }
        }}
      />
      </div>
    )
  }