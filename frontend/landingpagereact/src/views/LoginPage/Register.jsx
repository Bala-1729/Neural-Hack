import React from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardFooter from "components/Card/CardFooter"
import Button from "components/CustomButtons/Button"
import CustomInput from "components/CustomInput/CustomInput"
import {People, Email} from "@material-ui/icons" 
import Icon from "@material-ui/core/Icon";

// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles(styles);
  function Register(){
    const classes = useStyles();
    return (
      <GridContainer justify="center">
      <GridItem xs={12} md={10}>
      <div className={classes.typo}>
            <h2 style={{color:"#3490de", fontWeight:"bold"}} className={classes.title}>Register</h2>
        </div>
        <form className={classes.form}>
        <img src={require("assets/img/useridf.png")} style={{width:150}} alt="User-icon"/>
          <CardBody>
            <CustomInput
              labelText="Name"
              id="first"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
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

export default Register