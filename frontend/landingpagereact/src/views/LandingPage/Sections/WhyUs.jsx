import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import ModalBox from "./ModalBox";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} style={{ color: "black" }}>
            Why Trust Us?
          </h2>
          <h5 className={classes.description}>
            One of the most important factor is the relationship with the
            customer, when it comes to health related problems generally people
            don't believe anything untill they get to know from a doctor. But
            here we deliberately show how we process the data that we get from
            the user to determine the end result. We processed over thousands of test
            samples with 6 different algorithms to bring the most efficient way
            to analyse your medical data. Still don't trust us? you can cross
            verify your own test data in the <strong>One time user </strong>
            section present in the navigation bar!
          </h5>
          <br />
        </GridItem>
      </GridContainer>
      <h4 className={classes.description}>
        <p style={{ color: "red", display: "inline-block", fontSize: 18 }}>
          Note:
        </p>{" "}
        The below section is only for AI/ML Enthusiast else get ready to have
        your mind blown.
      </h4>
      <ModalBox />
    </div>
  );
}
