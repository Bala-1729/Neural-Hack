import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import NotesIcon from '@material-ui/icons/Notes';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import NavPills from "components/NavPills/NavPills.js";
import Form from "./Form.jsx";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg11.jpg";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function InstantUser() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 800);
  const classes = useStyles();

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
            justify="space-around"
            alignItems="center"
          >
            <GridItem
              className={classes[cardAnimaton]}
              xs={12}
              sm={12}
              md={6}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
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
                        <span role="img" aria-label="look left for details tab">👈</span>Brief description of the parameters required are given in the details tab.
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
                          <b style={{ fontWeight: "bold" }}>Pregnancies:</b>
                          <br />
                          Number of times pregnant
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>Glucose:</b>
                          <br />
                          Plasma glucose concentration a 2 hours in an oral
                          glucose tolerance test
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>BloodPressure:</b>
                          <br />
                          Diastolic blood pressure (mm Hg)
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>SkinThickness:</b>
                          <br />
                          Triceps skin fold thickness (mm)
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>Insulin:</b>
                          <br />
                          2-Hour serum insulin (mu U/ml)
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>BMI:</b>
                          <br />
                          Body mass index (weight in kg/(height in m)^2)
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>
                            DiabetesPedigreeFunction (DPF)
                          </b>
                          <br />
                          Diabetes pedigree function
                        </li>
                        <li>
                          {" "}
                          <b style={{ fontWeight: "bold" }}>Age:</b>
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
