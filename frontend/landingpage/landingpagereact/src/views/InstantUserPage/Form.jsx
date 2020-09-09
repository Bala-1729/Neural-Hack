import React, { useState, useEffect } from 'react';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import axios from 'axios';

import TextField from "@material-ui/core/TextField"
import Button from "components/CustomButtons/Button.js";
import CardFooter from 'components/Card/CardFooter';

export default function Form() {
    const [pregnancies, setPregnancies] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [skinThickness, setSkinThickness] = useState(0);
    const [insulin, setInsulin] = useState(0);
    const [bmi, setBmi] = useState(0.0);
    const [dpf, setDPF] = useState(0.0);
    const [age, setAge] = useState(0);

    const Submit = (e) => {
        e.preventDefault();
        console.log(bmi, dpf, age);
        axios(
            {
                url: "http://localhost:8000/test1/instantUser/",
                method: "POST",
                data: {
                    pregnancies: pregnancies,
                    glucose: glucose,
                    bloodPressure: bloodPressure,
                    skinThickness: skinThickness,
                    insulin: insulin,
                    bmi: bmi,
                    diabetesPedgreeFunction: dpf,
                    age: age,
                }
            })
            .then(function (response) {
                console.log(response.data["probability"])

                const result=document.getElementById("result");
                result.innerText=''
                result.append("Changes of the patient having diabetes are " + response.data["probability"] +"%.");
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <form onSubmit={Submit} method="POST">
            <GridContainer>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} id="pregnancies" name="pregnancies" type="number" label="Pregnancies" value={pregnancies} step="any" onChange={(exe) => setPregnancies(exe.target.value)} required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="glucose" type="number" label="Glucose" value={glucose} onChange={(exe) => setGlucose(exe.target.value)} step="any" required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="bloodPressure" type="number" label="Blood Presssure" value={bloodPressure} onChange={(exe) => setBloodPressure(exe.target.value)} step="any" required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="skinThickness" type="number" label="Skin Thickness" value={skinThickness} onChange={(exe) => setSkinThickness(exe.target.value)} step="any" required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="insulin" type="number" label="Insulin" step="any" value={insulin} onChange={(exe) => setInsulin(exe.target.value)} required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="bmi" type="number" label="BMI" step="any" value={bmi} onChange={(exe) => setBmi(exe.target.value)} required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="diabetesPedgreeeFunction" type="number" value={dpf} label="DPF" onChange={(exe) => setDPF(exe.target.value)} step="any" required />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField fullWidth={true} name="age" type="number" label="Age" step="any" value={age} onChange={(exe) => setAge(exe.target.value)} required />
                </GridItem>
                <CardFooter >
                <Button type="submit" color="mine">
                    Click Click!!!
                </Button>
                <GridItem id="result" xs={12} sm={6} md={8} style={{padding: 30}}>
                                    
                </GridItem>            
            </CardFooter>   
            </GridContainer>
            
        </form>
    );
}
