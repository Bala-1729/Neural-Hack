import React from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody";

import Button from "components/CustomButtons/Button"
import CustomInput from "components/CustomInput/CustomInput"
import  Email from "@material-ui/icons/Email" 
import Icon from "@material-ui/core/Icon";
// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(styles);
  function Login(){
    const classes = useStyles();
    return (
      <GridContainer justify="center">
      <GridItem xs={12} md={10}>
        <div className={classes.typo}>
            <h2 style={{color:"#3490de", fontWeight:"bold"}} className={classes.title}>Log In</h2>
        </div>
        <form className={classes.form}>
        <img src={require("assets/img/useridm.png")} style={{width:150}} alt="User-icon"/>
          <CardBody>
            <CustomInput
              labelText="Email..."
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className={classes.inputIconsColor}>
                      lock_outline
                            </Icon>
                  </InputAdornment>
                ),
                autoComplete: "off"
              }}
            />
          </CardBody>
          <Button color="mine" size="md">
              Click Click!!!  
          </Button>
        </form>
      </GridItem>
    </GridContainer>
    );
  } 

export default Login