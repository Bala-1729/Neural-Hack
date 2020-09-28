import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import NavPills from "components/NavPills/NavPills";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import LocationOn from "@material-ui/icons/LocationOn";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles(styles);

function sendMail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_u5bkgdp",
      "template_0zmsuus",
      e.target,
      "user_HiA1CBavrq0bHckeYEzOy"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export default function ContactUsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title} style={{ color: "black" }}>
            Contact Us <ContactSupportIcon style={{ fontSize: 30 }} />
          </h2>
          <h4 className={classes.description}>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us...
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <form onSubmit={sendMail}>
            <GridContainer style={{ paddingTop: 40 }}>
              <GridItem xs={12} sm={5} md={5}>
                <TextField
                  fullWidth={true}
                  id="name"
                  label="Name"
                  name="name"
                  required={true}
                />
              </GridItem>
              <GridItem xs={12} sm={5} md={5}>
                <TextField
                  fullWidth={true}
                  id="email"
                  label="Email"
                  name="email"
                  required={true}
                />
              </GridItem>
              <br />
              <br />
              <br />
              <GridItem
                xs={12}
                sm={12}
                md={10}
                style={{ paddingRight: 0, paddingTop: 30 }}
              >
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={10}
                  fullWidth={true}
                  name="message"
                  required={true}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} style={{ paddingTop: 20 }}>
                <Button type="submit" color="mine">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{
            boxShadow: "10px 14px 28px -3px rgba(8,5,5,0.39)",
            borderRadius: "15px",
          }}
        >
          <NavPills
            color="mine"
            tabs={[
              {
                tabButton: "FAQ",
                tabIcon: HelpIcon,
                tabContent: (
                  <span
                    className={classes.description}
                    style={{ textAlign: "left" }}
                  >
                    <p>
                      <strong>Q1:</strong> What's the difference between one
                      time user and registered user?
                    </p>
                    <p>
                      <strong>Ans:</strong> One time user is for anyone who
                      wishes to check their health once or twice a month, their
                      data won't be stored, while registered users can be used
                      by hospitals and similar organisations to predict,store
                      and analyse their patients data.
                    </p>
                    <hr
                      style={{
                        border: 0,
                        height: "1px",
                        background: "#333",
                        backgroundImage:
                          "linear-gradient(to right, #ccc, #333, #ccc)",
                      }}
                    />
                    <p>
                      <strong>Q2:</strong> What are all the parameters that the
                      user should provide?
                    </p>
                    <p>
                      <strong>Ans:</strong> User can refer the details tab
                      present in the{" "}
                      <a
                        href="http://localhost:3000/instantUser"
                        style={{ color: "#3490de" }}
                      >
                        prediction site
                      </a>{" "}
                      for clear explanation.
                    </p>
                    <hr
                      style={{
                        border: 0,
                        height: "2px",
                        background: "#333",
                        backgroundImage:
                          "linear-gradient(to right, #ccc, #333, #ccc)",
                      }}
                    />
                    <p>
                      <strong>Q3:</strong> Unable to find registration page in
                      Login/Register tab.
                    </p>
                    <p>
                      <strong>Ans:</strong> Sometimes a little animation could
                      bring discomfort for others, you will be able to find a
                      Register text on the same site clicking on which, would
                      slide to change into registration form.
                    </p>
                    <br />
                  </span>
                ),
              },
              {
                tabButton: "Location",
                tabIcon: LocationOn,
                tabContent: (
                  <span className={classes.description}>
                    <p>
                      <strong>
                        Address:
                        <br />
                      </strong>
                      57 Bharathiyar St, Ekkattuthangal,
                      <br />
                      Chennai,
                      <br />
                      Tamil Nadu,
                      <br />
                      600097
                    </p>
                    <p>
                      <strong>
                        Contact:
                        <br />
                      </strong>
                      Phone: +91-93602 00169
                      <br />
                      Email: projectdiabetesprediction@gmail.com
                    </p>
                    <p>
                      <Button
                        justIcon
                        href="#"
                        color="transparent"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i
                          className={classes.socials + " fab fa-facebook"}
                          style={{ color: "rgb(66,103,178)" }}
                        />
                      </Button>
                      <Button
                        justIcon
                        target="_blank"
                        href="#"
                        color="transparent"
                        className={classes.margin5}
                      >
                        <img
                          src="https://www.transparentpng.com/thumb/logo-instagram/oKmsnf-logo-instagram-simple-png.png"
                          alt="Logo Instagram Simple PNG @transparentpng.com"
                          style={{ width: 21.5, height: 21.5 }}
                        />
                      </Button>
                      <Button
                        justIcon
                        href="#"
                        color="transparent"
                        target="_blank"
                        className={classes.margin5}
                      >
                        <i
                          className={classes.socials + " fa fa-globe"}
                          style={{ color: "rgb(66,103,178)" }}
                        />
                      </Button>
                    </p>
                  </span>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
