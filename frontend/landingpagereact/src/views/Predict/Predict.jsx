import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import NotesIcon from '@material-ui/icons/Notes';
import InfoIcon from "@material-ui/icons/Info";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import Badge from "components/Badge/Badge.js";
// core components
import Header from "components/Header/Header1.js";
import HeaderLinks from "components/Header/HeaderLinks1.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";
import Form from "./Form.jsx";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg001.jpg";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function InstantUser(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 800);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <GridItem
              className={classes[cardAnimaton]}
              xs={12}
              sm={12}
              md={6}
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "40px",
              }}
            >
              <NavPills
                color="mine"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 3, md: 3 },
                  contentGrid: { xs: 12, sm: 9, md: 9 },
                }}
                tabs={[
                  {
                    tabButton: "Note",
                    tabIcon: NotesIcon,
                    tabContent: (
                      <span>
                        <p>
                          Hey there, here are some points that should be noted before starting to work with
                          this site.
                        </p>
                        <p>
                          The most important point to be noted is that, our prediction model is only compatible 
                          with female patients because the AIML model takes in the term Pregnancy as one of the inputs. So Please
                          make sure to enter correct data.
                        </p>
                        <p>
                        👈Brief description of the parameters required are given in the details tab.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Details",
                    tabIcon: InfoIcon,
                    tabContent: (
                      <ul>
                        <li>
                          {" "}
                          <Badge color="mine">Pregnancies</Badge>
                          <br />
                          Previous Pregnancies
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Glucose</Badge>
                          <br />
                          Plasma glucose concentration a 2 hours in an oral
                          glucose tolerance test
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Blood Pressure</Badge>
                          <br />
                          Diastolic blood pressure (mm Hg)
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Skin Thickness</Badge>
                          <br />
                          Triceps skin fold thickness (mm)
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Insulin</Badge>
                          <br />
                          2-Hour serum insulin (mu U/ml)
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">BMI</Badge>
                          <br />
                          Body mass index (weight in kg/(height in m)^2)
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Diabetes Pedgree Function</Badge>
                          <br />
                          Diabetes pedigree function
                        </li>
                        <br />
                        <li>
                          {" "}
                          <Badge color="mine">Age</Badge>
                          <br />
                          Age (in years)
                        </li>
                      </ul>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="blue" className={classes.cardHeader}>
                  <h4>Medical Data</h4>
                </CardHeader>
                <p className={classes.divider}>
                  Please provide the required data of the patient.
                </p>
                <CardBody>
                  <Form />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
