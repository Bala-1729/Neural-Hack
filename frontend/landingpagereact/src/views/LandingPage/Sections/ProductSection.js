import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{ color: "black" }}>
            Let{"'"}s talk product.
          </h2>
          <h5 className={classes.description}>
            Infusing the technology of machine learning paired with simple user
            interface we bring forth our product. Launched in 2020. Our product helps in
            simple testing for diabetes. By providing simple data such as
            Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI,
            DiabetesPedgreeFunction, Age, an almost cent precent accurate result
            is obtained.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Accurate"
              description="We don't lie,Predictions are done by Machine Learning which can never be 100% but our trained model is capable has accuracy of 86%."
              icon={TrackChangesIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="We Care about your Health"
              description="Why waste precious time and money visiting hospital for routine checkup for your health, analyse it for you at your home! "
              icon={LocalHospitalIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="It's absolutely Free!"
              description="We Don't charge a single penny for our service it's absolutely free of cost, yeah you ready it correctly as we said 'We care for you'."
              icon={MonetizationOnIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Exclusively for Women."
              description="Our model is trained only for women, as it takes in number of pregnancies as a parameter  but we assure this will be available for all soon!."
              icon={PregnantWomanIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
