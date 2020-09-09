import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} style={{color:"black"}}>How does it Work.</h2>
          <h5 className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla at metus sagittis sodales nec eget risus. Nulla bibendum faucibus tellus, ac interdum tellus euismod ut. In hac habitasse platea dictumst. Quisque lobortis semper erat non pulvinar. In scelerisque mauris et tellus porta faucibus. Morbi vel congue lectus. Curabitur id felis erat. Suspendisse potenti.
Nullam ac ante metus. Aliquam in orci sagittis, feugiat dui ut, interdum magna. Vestibulum eu arcu blandit, finibus lorem eget, gravida sem. Curabitur rhoncus diam at mi accumsan, eu gravida ex laoreet. Ut egestas dolor ac nunc luctus tempor..
          </h5>
        </GridItem>
      </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={6}>
          <h5 className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla at metus sagittis sodales nec eget risus. Nulla bibendum faucibus tellus, ac interdum tellus euismod ut. In hac habitasse platea dictumst. Quisque lobortis semper erat non pulvinar. In scelerisque mauris et tellus porta faucibus. Morbi vel congue lectus. Curabitur id felis erat. Suspendisse potenti.
Nullam ac ante metus. Aliquam in orci sagittis, feugiat dui ut, interdum magna. Vestibulum eu arcu blandit, finibus lorem eget, gravida sem. Curabitur rhoncus diam at mi accumsan, eu gravida ex laoreet. Ut egestas dolor ac nunc luctus tempor..
          </h5>
          </GridItem>
        </GridContainer>
      </div>
  );
}
