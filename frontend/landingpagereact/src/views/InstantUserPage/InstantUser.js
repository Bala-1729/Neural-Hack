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
import InfoIcon from '@material-ui/icons/Info';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
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

import image from "assets/img/bg11.jpg";

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
                    color: "white"
                }}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer container
                        direction="row"
                        justify="space-around"
                        alignItems="center" >
                        <GridItem className={classes[cardAnimaton]} xs={12} sm={12} md={6} style={{backgroundColor:"rgba(0,0,0,0.5)", borderRadius:"40px"}}>
                            <NavPills
                                color="mine"
                                horizontal={{
                                    tabsGrid: { xs: 12, sm: 3, md: 3 },
                                    contentGrid: { xs: 12, sm: 9, md: 9 }
                                }}
                                tabs={[
                                    {
                                        tabButton: "Note",
                                        tabIcon: NotificationImportantIcon,
                                        tabContent: (
                                            <span>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla at metus sagittis sodales nec eget risus. Nulla bibendum faucibus tellus, ac interdum tellus euismod ut. In hac habitasse platea dictumst.
                        </p>
                                                <br />
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla at metus sagittis sodales nec eget risus. Nulla bibendum faucibus tellus, ac interdum tellus euismod ut. In hac habitasse platea dictumstLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla at metus sagittis sodales nec eget risus. Nulla bibendum faucibus tellus, ac interdum tellus euismod ut. In hac habitasse platea dictumst.
                        </p>
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "Details",
                                        tabIcon: InfoIcon,
                                        tabContent: (
                                            <ul>
                                                <li> <b style={{fontWeight:"bold"}}>Pregnancies:</b><br/>Number of times pregnant</li>
                                                <li> <b style={{fontWeight:"bold"}}>Glucose:</b><br/>lasma glucose concentration a 2 hours in an oral glucose tolerance test</li>
                                                <li> <b style={{fontWeight:"bold"}}>BloodPressure:</b><br/>iastolic blood pressure (mm Hg)</li>
                                                <li> <b style={{fontWeight:"bold"}}>SkinThickness:</b><br/>riceps skin fold thickness (mm)</li>
                                                <li> <b style={{fontWeight:"bold"}}>Insulin:</b><br/>2-Hour serum insulin (mu U/ml)</li>
                                                <li> <b style={{fontWeight:"bold"}}>BMI:</b><br/>ody mass index (weight in kg/(height in m)^2)</li>
                                                <li> <b style={{fontWeight:"bold"}}>DiabetesPedigreeFunction (DPF)</b><br/>iabetes pedigree function</li>
                                                <li> <b style={{fontWeight:"bold"}}>Age:</b><br/>ge (in years)</li>

                                            </ul>
                                        )
                                    },
                                    
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Card className={classes[cardAnimaton]}>
                                    <CardHeader color="blue" className={classes.cardHeader}>
                                        <h4>Medical Data</h4>
                                    </CardHeader>
                                    <p className={classes.divider}>Please provide the required data of the patient.</p>
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
