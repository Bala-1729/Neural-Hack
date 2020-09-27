import React, { useState } from "react";
import axios from "axios";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const Submit = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8000/api/auth/register",
      method: "POST",
      data: {
        username: username,
        password: password,
        email: email,
      },
    })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setFlag(true);
        Test(localStorage.getItem("token"));
      })
      .catch(function (error) {
        setEmail('')
        setPassword('')
        setUsername('')
        if(username!='' && password!='' && email!='')setOpen(true)
        console.log(error)
      });
  };
  const Test = (token) => {
    axios({
      url: "http://localhost:8000/api/userProfile/",
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        companyName: "companyName",
        jobRole: "jobRole",
        address: "address",
        city: "city",
        country: "country",
        zipCode: "zipCode",
        mobileNumber: "mobileNumber",
        DOB: "DOB",
        description: "description",
      },
    }).then(function (response) {
      window.location.reload(true);
    });
  };
  return (
    <GridContainer justify="center">
      <GridItem xs={12} md={10}>
        <div className={classes.typo}>
          <h2
            style={{ color: "#3490de", fontWeight: "bold" }}
            className={classes.title}
          >
            Register
          </h2>
        </div>
        <form className={classes.form}>
          <img
            src={require("assets/img/useridf.png")}
            style={{ width: 150 }}
            alt="User-icon"
          />
          <CardBody>
            <GridContainer>
              <GridContainer>
                <GridItem xs={2} sm={2} md={2} style={{ paddingTop: 30 }}>
                  <PersonIcon />
                </GridItem>
                <GridItem xs={10} sm={10} md={10} style={{ padding: 10 }}>
                  <TextField
                    fullWidth={true}
                    id="username"
                    name="username"
                    type="text"
                    label="Username"
                    value={username}
                    onChange={(exe) => setUsername(exe.target.value)}
                    required
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={2} sm={2} md={2} style={{ paddingTop: 30 }}>
                  <EmailIcon />
                </GridItem>
                <GridItem xs={10} sm={10} md={10} style={{ padding: 10 }}>
                  <TextField
                    fullWidth={true}
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(exe) => setEmail(exe.target.value)}
                    required
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={2} sm={2} md={2} style={{ paddingTop: 30 }}>
                  <LockIcon />
                </GridItem>
                <GridItem xs={10} sm={10} md={10} style={{ padding: 10 }}>
                  <TextField
                    fullWidth={true}
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(exe) => setPassword(exe.target.value)}
                    required
                  />
                </GridItem>
              </GridContainer>
            </GridContainer>
          </CardBody>
          <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            fontSize="small"
            severity="error"
          >
            Invalid data or Username|Email already exists!
          </Alert>
        </Collapse>
          <Button
            onClick={Submit}
            value={flag}
            onChange={(exe) => setFlag(exe.target.value)}
            color="mine"
            size="md"
          >
            Click Click!!!
          </Button>
        </form>
      </GridItem>
    </GridContainer>
  );
}

export default Register;

// import React from 'react';

// // core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Card from "components/Card/Card";
// import CardBody from "components/Card/CardBody";
// import CardHeader from "components/Card/CardHeader";
// import CardFooter from "components/Card/CardFooter"
// import Button from "components/CustomButtons/Button"
// import CustomInput from "components/CustomInput/CustomInput"
// import {People, Email} from "@material-ui/icons"
// import Icon from "@material-ui/core/Icon";

// // core components
// import styles from "assets/jss/material-kit-react/components/cardStyle.js";
// import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from '@material-ui/core/InputAdornment';

// const useStyles = makeStyles(styles);
//   function Register(){
//     const classes = useStyles();
//     return (
//       <GridContainer justify="center">
//       <GridItem xs={12} md={10}>
//       <div className={classes.typo}>
//             <h2 style={{color:"#3490de", fontWeight:"bold"}} className={classes.title}>Register</h2>
//         </div>
//         <form className={classes.form}>
//         <img src={require("assets/img/useridf.png")} style={{width:150}} alt="User-icon"/>
//           <CardBody>
//             <CustomInput
//               labelText="Name"
//               id="first"
//               formControlProps={{
//                 fullWidth: true
//               }}
//               inputProps={{
//                 type: "text",
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <People className={classes.inputIconsColor} />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <CustomInput
//               labelText="Email..."
//               id="email"
//               formControlProps={{
//                 fullWidth: true
//               }}
//               inputProps={{
//                 type: "email",
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <Email className={classes.inputIconsColor} />
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <CustomInput
//               labelText="Password"
//               id="pass"
//               formControlProps={{
//                 fullWidth: true
//               }}
//               inputProps={{
//                 type: "password",
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <Icon className={classes.inputIconsColor}>
//                       lock_outline
//                             </Icon>
//                   </InputAdornment>
//                 ),
//                 autoComplete: "off"
//               }}
//             />
//           </CardBody>
//           <Button color="mine" size="md">
//               Click Click!!!
//           </Button>
//         </form>
//       </GridItem>

//     </GridContainer>
//     );
//   }

// export default Register
