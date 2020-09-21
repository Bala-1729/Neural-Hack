import React, { useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
//icons
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import avatar from "assets/img/useridm.png";
import { localeData } from "moment";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [fullName, setFullName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [jobRole, setjobRole] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [description, setdescription] = useState("");

  const token = localStorage.getItem("token");

  const dummmy = () => {
    if (token === "") {
      return <Redirect to="/landing-page" />;
    }
    axios({
      url: "http://localhost:8000/api/userProfile/",
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(function (response) {
      console.log(response);
      document.getElementById(
        "jobRole"
      ).innerHTML = `${response.data.jobRole} @ ${response.data.companyName}`;
      document.getElementById("fullname").innerHTML = response.data.fullName;
      document.getElementById("desc").innerHTML = response.data.description;
      document.getElementById("contact").innerHTML ='Contact: '+response.data.mobileNumber;
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    axios({
      url: "http://localhost:8000/api/userProfile/update/",
      method: "PUT",
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        fullName: fullName,
        companyName: companyName,
        jobRole: jobRole,
        address: address,
        city: city,
        country: country,
        zipCode: zipCode,
        mobileNumber: mobileNumber,
        DOB: DOB,
        description: description,
      },
    }).then(function (response) {
      console.log(response);
      window.location.reload(true);
    });
  };

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.container}>
      <GridContainer justify="space-evenly" alignItems="center">
        {dummmy()}
        <GridItem xs={12} sm={12} md={7}>
          <Card className={classes[cardAnimaton]}>
            <CardHeader color="blue">
              <h4 className={classes.cardTitleWhite} align="center">
                Update Profile
              </h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={Submit} method="POST">
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      id="fullName"
                      name="fullName"
                      type="text"
                      label="Full Name"
                      value={fullName}
                      onChange={(exe) => setFullName(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      id="companyName"
                      name="companyName"
                      type="text"
                      label="Company Name"
                      value={companyName}
                      onChange={(exe) => setcompanyName(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="jobRole"
                      type="text"
                      label="Job Role"
                      value={jobRole}
                      onChange={(exe) => setjobRole(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="address"
                      type="text"
                      label="Company Address"
                      value={address}
                      onChange={(exe) => setaddress(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="city"
                      type="text"
                      label="City"
                      value={city}
                      onChange={(exe) => setcity(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="country"
                      type="text"
                      label="Country"
                      value={country}
                      onChange={(exe) => setcountry(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="zipCode"
                      type="text"
                      label="Zip Code"
                      value={zipCode}
                      onChange={(exe) => setzipCode(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="mobileNumer"
                      type="text"
                      value={mobileNumber}
                      label="Contact Number"
                      onChange={(exe) => setmobileNumber(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="DOB"
                      type="text"
                      label="Date of Birth"
                      value={DOB}
                      onChange={(exe) => setDOB(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} style={{ padding: 20 }}>
                    <TextField
                      fullWidth={true}
                      name="description"
                      type="text"
                      multiline
                      rowsMax={10}
                      rows={8}
                      label="Description"
                      value={description}
                      onChange={(exe) => setdescription(exe.target.value)}
                      required
                    />
                  </GridItem>
                  <CardFooter>
                    <Button onClick={Submit} type="submit" color="mine">
                      Create!!
                    </Button>
                  </CardFooter>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile className={classes[cardAnimaton]}>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 id="fullname" className={classes.cardTitle} align="center">
                Full Name
              </h4>
              <h6 id="jobRole" className={classes.cardCategory} align="center">
                Job Role at Hospital Name
              </h6>
              <p id="desc" className={classes.description} align="center">
                Tell everyone something about you!!!
              </p>
              <p  id="contact" className={classes.description} align="center">
                Contact:user@example.com
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
