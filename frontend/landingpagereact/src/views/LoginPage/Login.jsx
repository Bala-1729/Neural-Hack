import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody";
import PersonIcon from "@material-ui/icons/Person";

import Button from "components/CustomButtons/Button";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Lock";
// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { Grid } from "@material-ui/core";
import { Lock } from "@material-ui/icons";

const useStyles = makeStyles(styles);
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);

  const classes = useStyles();
  console.log(username, password);
  const Submit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios({
      url: "http://localhost:8000/api/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setFlag(true);
      })
      .catch(function (error) {
        setUsername("");
        setPassword("");
        if(username!='' && password!='')setOpen(true);
      });
  };

  const Test = () => {
    if (flag) return <Redirect to="/predict" />;
    else console.log("");
  };
  return (
    <GridContainer justify="center">
      {Test()}
      <GridItem xs={12} md={10}>
        <div className={classes.typo}>
          <h2
            style={{ color: "#3490de", fontWeight: "bold" }}
            className={classes.title}
          >
            Log In
          </h2>
        </div>
        <form className={classes.form}>
          <img
            src={require("assets/img/useridm.png")}
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
              <GridItem xs={12} sm={12} md={12}>
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
                    severity="error"
                  >
                    Username and Password doesn't match!
                  </Alert>
                </Collapse>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ padding: 10 }}>
                <Button
                  onClick={Submit}
                  value={flag}
                  onChange={(exe) => setFlag(exe.target.value)}
                  color="mine"
                  size="md"
                >
                  Click Click!!!
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </form>
      </GridItem>
    </GridContainer>
  );
}

export default Login;

// import React from 'react';

// // core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import CardBody from "components/Card/CardBody";

// import Button from "components/CustomButtons/Button"
// import CustomInput from "components/CustomInput/CustomInput"
// import  Email from "@material-ui/icons/Email"
// import Icon from "@material-ui/core/Icon";
// // core components
// import styles from "assets/jss/material-kit-react/components/cardStyle.js";
// import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from '@material-ui/core/InputAdornment';

// const useStyles = makeStyles(styles);
//   function Login(){
//     const classes = useStyles();
//     return (
//       <GridContainer justify="center">
//       <GridItem xs={12} md={10}>
//         <div className={classes.typo}>
//             <h2 style={{color:"#3490de", fontWeight:"bold"}} className={classes.title}>Log In</h2>
//         </div>
//         <form className={classes.form}>
//         <img src={require("assets/img/useridm.png")} style={{width:150}} alt="User-icon"/>
//           <CardBody>
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

// export default Login

{
  /* <GridContainer justify="center">
      {Test()}
      <GridItem xs={12} md={10}>
        <div className={classes.typo}>
          <h2
            style={{ color: "#3490de", fontWeight: "bold" }}
            className={classes.title}
          >
            Log In
          </h2>
        </div>
        <form className={classes.form}>
          <img
            src={require("assets/img/useridm.png")}
            style={{ width: 150 }}
            alt="User-icon"
          />
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} style={{ padding: 10 }}>
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
              <GridItem xs={12} sm={12} md={12} style={{ padding: 10 }}>
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
              <GridItem xs={12} sm={12} md={12} style={{ padding: 10 }}>
                <Button
                  onClick={Submit}
                  value={flag}
                  onChange={(exe) => setFlag(exe.target.value)}
                  color="mine"
                  size="md"
                >
                  Click Click!!!
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </form>
      </GridItem>
    </GridContainer> */
}
