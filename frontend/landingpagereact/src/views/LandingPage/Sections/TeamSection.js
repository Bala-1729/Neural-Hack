import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Icon from '@material-ui/core/Icon';


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Grid from '@material-ui/core/Grid';
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Tooltip from "@material-ui/core/Tooltip";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import anudeep from "assets/img/faces/anudeep.jpg";
import sandeep from "assets/img/faces/sandeep.jpg"
import bala from "assets/img/faces/bala.png";
import rishikesh from "assets/img/faces/rishikesh.png"
import akhil from "assets/img/faces/akhil.png"
import { FormatAlignCenter } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles(styles);


export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} >
      <h2 className={classes.title} style={{color:"black"}}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={7} className={classes.itemGrid}>
                <img src={akhil} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Chatrathy Sai Akhil Gopal
                <br />
                <small className={classes.smallTitle}>Business Strategist</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Experience in Consulting field worked closely with Political consultancy group in developing Predictive models aligning with the On ground strategies.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:Facebook"
                >
                <Button
                  justIcon
                  href="https://www.facebook.com/akhil.gopal.142"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} style={{color:"rgb(66,103,178)"}}/>
                </Button>
                </Tooltip>
                <Tooltip
                  title="Connect:LinkedIn"
                >
                  <Button
                    justIcon
                    href="https://www.linkedin.com/in/chatrathy-sai-akhil-gopal-0108a881"
                    color="transparent"
                    target="_blank"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} style={{color:"rgb(40,103,178)"}} />
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  href="https://www.instagram.com/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={7} className={classes.itemGrid}>
                <img src={bala} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Balasubramaniam Anbu
                <br />
                <small className={classes.smallTitle}>UI Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  An innovative and strategic thinker with innate problem-solving capabilities along with possession of good communication and programming skills.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:Facebook"
                >
                <Button
                  justIcon
                  href="https://www.facebook.com/profile.php?id=100006569958511"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} style={{color:"rgb(66,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:LinkedIn"
                >
                <Button
                  justIcon
                  href="https://www.linkedin.com/in/balasubramaniam-2561"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} style={{color:"rgb(40,103,178)"}} />
                </Button>
                </Tooltip>
                <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  href="https://www.instagram.com/bala_1729"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={7} className={classes.itemGrid}>
                <img src={rishikesh} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Rishikesh Raj Meesala
                <br />
                <small className={classes.smallTitle}>AI Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I'm Passionate, Creative with Supreme Communication skills and Always willing to innovate the new things which can improve the existing technology.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:Facebook"
                >
                <Button
                  justIcon
                  href="https://www.facebook.com/1999.rishikesh"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} style={{color:"rgb(66,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:LinkedIn"
                >
                <Button
                  justIcon
                  href="https://www.linkedin.com/in/rishikesh-raj-9a59301a8"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} style={{color:"rgb(40,103,178)"}} />
                </Button>
                </Tooltip>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  target="_blank"
                  href="https://www.instagram.com/y_ri5hi/"
                  color="transparent"
                  className={classes.margin5}
                >
                <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        {/*
          <Grid container justify="center" alignItems="center" md={6}>
            <Card plain>
              <Grid container justify="center" item xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </Grid>
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                 <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:Facebook"
                >
                <Button
                  justIcon
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} style={{color:"rgb(66,103,178)"}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </Grid>
          <Grid container justify="center" alignItems="center" md={6}>
            <Card plain>
              <Grid container justify="center" item xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={sandeep} alt="..." className={imageClasses} />
              </Grid>
              <h4 className={classes.cardTitle}>
                Sandeep Reddy Bandi
                <br />
                <small className={classes.smallTitle}>AI Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A Decent, Open minded, Sincere and Hard cum Smart worker with interests in Computer Programming and Data Science.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:LinkedIn"
                >
                <Button
                  justIcon
                  href="https://www.linkedin.com/in/sandeep-reddy-409723182/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"}  style={{color:"rgb(40,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  href="https://www.instagram.com/____sandeep____reddy____sunny/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </Grid>
        </GridContainer>*/}
        <GridContainer justify="space-around">
          <GridItem xs={12} sm={12} md={4}>
          <Card plain>
              <Grid container justify="center" item xs={12} sm={12} md={7} className={classes.itemGrid}>
                <img src={anudeep} alt="..." className={imageClasses} />
              </Grid>
              <h4 className={classes.cardTitle}>
              Anudeep chakilam
                <br />
                <small className={classes.smallTitle}>AI Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Keep exploring.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:Facebook"
                >
                <Button
                  justIcon
                  href="https://www.facebook.com/profile.php?id=100007316589357"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} style={{color:"rgb(40,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:LinkedIn"
                >
                <Button
                  justIcon
                  href="www.linkedin.com/in/anudeep-chakilam-59826018a"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} style={{color:"rgb(66,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  href="https://www.instagram.com/chakilam.anudeep/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                 <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card plain>
              <Grid container justify="center" item xs={12} sm={12} md={7} className={classes.itemGrid}>
                <img src={sandeep} alt="..." className={imageClasses} />
              </Grid>
              <h4 className={classes.cardTitle}>
                Sandeep Reddy Bandi
                <br />
                <small className={classes.smallTitle}>AI Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A Decent, Open minded, Sincere and Hard cum Smart worker with interests in Computer Programming and Data Science.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Tooltip
                  title="Connect:LinkedIn"
                >
                <Button
                  justIcon
                  href="https://www.linkedin.com/in/sandeep-reddy-409723182/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"}  style={{color:"rgb(40,103,178)"}}/>
                </Button>
              </Tooltip>
              <Tooltip
                  title="Connect:Instagram"
                >
                <Button
                  justIcon
                  href="https://www.instagram.com/____sandeep____reddy____sunny/"
                  color="transparent"
                  target="_blank"
                  className={classes.margin5}
                >
                  <img src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png" alt="Logo Instagram Simple PNG @transparentpng.com" style={{width:21.5,height:21.5}}/>
                </Button>
              </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
