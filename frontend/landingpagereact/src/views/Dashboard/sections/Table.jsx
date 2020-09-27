import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import axios from "axios";


const column = [
    { title: 'Patient Name', field: 'patientName', align:'center'},
    { title: 'Patient Id', field: 'patientId', align:'center'},
    { title: 'Pregnancies', field: 'pregnancies', align:'center'},
    { title: 'Glucose', field: 'glucose', align:'center'},
    { title: 'Blood Pressure', field: 'bloodPressure', align:'center'},
    { title: 'Skin Thickness', field: 'skinThickness', align:'center'},
    { title: 'Insulin', field: 'insulin', align:'center'},
    { title: 'BMI', field: 'bmi', align:'center'},
    { title: 'Diabetes Pedgree Function', field: 'diabetesPedgreeFunction', align:'center'},
    { title: 'Age', field: 'age', align:'center'},
    { title: 'Result', field: 'result', align:'center'},
];
let rows=[]

function createData(
  patientName,
  patientId,
  pregnancies,
  glucose,
  bloodPressure,
  skinThickness,
  insulin,
  BMI,
  DPF,
  age,
  result
) {
  return {
    patientName,
    patientId,
    pregnancies,
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    BMI,
    DPF,
    age,
    result,
  };
}

const token=localStorage.getItem('token')
async function Load() {
  try {
    const response = await axios({
      url: "http://localhost:8000/api/medicalData/",
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data1 = await response.data;
    rows=data1.medicalData
    return data1;
  } catch (error) {
    console.log(error);
  }
}


const useStyles1 = makeStyles(styles);

export default function PatientTable() {
  Load()
  const classes1 = useStyles1();
  const Load1 = (e) => {
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
    <div className={classes1.container}>
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
  );
}




// const columns = [
//   { id: "patientName", label: "Patient Name", minWidth: 170 },
//   {
//     id: "patientId",
//     label: "Patient Id",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "pregnancies",
//     label: "Pregnancies",
//     minWidth: 100,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "glucose",
//     label: "Glucose",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "bloodPressure",
//     label: "Blood Pressure",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "skinThickness",
//     label: "Skin Thickness",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "insulin",
//     label: "Insulin",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "BMI",
//     label: "BMI",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "DPF",
//     label: "Diabetes Pedgree Function",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "Age",
//     label: "Age",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "Result",
//     label: "Result",
//     minWidth: 170,
//     align: "center",
//     format: (value) => value.toLocaleString("en-US"),
//   },
// ];

// function createData(
//   patientName,
//   patientId,
//   pregnancies,
//   glucose,
//   bloodPressure,
//   skinThickness,
//   insulin,
//   BMI,
//   DPF,
//   Age,
//   Result
// ) {
//   return {
//     patientName,
//     patientId,
//     pregnancies,
//     glucose,
//     bloodPressure,
//     skinThickness,
//     insulin,
//     BMI,
//     DPF,
//     Age,
//     Result,
//   };
// }

// const rows = [
//   createData("Patient Zero", 6,1, 148, 72, 35, 0, 33.6, 0.627, 50, 1),
// ];