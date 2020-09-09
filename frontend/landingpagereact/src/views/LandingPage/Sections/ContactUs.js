import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
import NavPills from "components/NavPills/NavPills"
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(styles);

function sendMail(e){
  e.preventDefault();
    emailjs.sendForm('service_u5bkgdp', 'template_0zmsuus', e.target, 'user_HiA1CBavrq0bHckeYEzOy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

export default function ContactUsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} >
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title} style={{color:"black"}}>Contact Us <ContactSupportIcon style={{ fontSize: 30 }}/></h2>
          <h4 className={classes.description}>
            Want to get in touch? We'd love to hear from you. Here's how you can reach us...
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} >
          <form onSubmit={sendMail}>
            <GridContainer style={{paddingTop:40}}>
              <GridItem xs={12} sm={6} md={6} >
                <TextField id="name" label="Name" name="name"  required={true} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextField id="email" label="Email" name="email" required={true}/>
              </GridItem><br/><br/><br/>
              <GridItem xs={12} sm={12} md={10}  style={{paddingRight:0,paddingTop:30}}>
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
              <GridItem xs={12} sm={12} md={4} style={{paddingTop:20}}>
                <Button type="submit" color="mine">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{boxShadow:"10px 14px 28px -3px rgba(8,5,5,0.39)"}}>
            <NavPills 
              color="mine"
                tabs={[
                  {
                    tabButton: "FAQ",
                    tabIcon: HelpIcon,
                    tabContent: (
                      <span className={classes.description} >
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span className={classes.description} >
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                      <span className={classes.description} >
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
      </GridContainer>
    </div>
  );
}
