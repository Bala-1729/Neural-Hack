import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import ContactUsSection from "./Sections/ContactUs.js";
import WhyUs from "./Sections/WhyUs.jsx"
import Working from "./Sections/Working.jsx"
import { Work } from "@material-ui/icons";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/title.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Lorem ipsum dolor sit amet.</h1>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <h4>
              Vestibulum molestie dictum pellentesque. Suspendisse risus ex, scelerisque quis vestibulum sit amet, porttitor elementum lectus. Cras viverra ut nunc eu facilisis. Ut iaculis, nisi ac tempor scelerisque, libero augue sodales elit, quis volutpat sapien justo tempus lectus. Donec lobortis eu magna eget interdum.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://youtu.be/QNJL6nfu__Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                How does it Work?
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WhyUs/>
          <Working/>
          <TeamSection />
          <ContactUsSection />
        </div>
      </div>
        <Footer />
    </div>
  );
}
