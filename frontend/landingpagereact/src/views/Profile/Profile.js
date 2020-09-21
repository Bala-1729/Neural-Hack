import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg001.jpg";
// @material-ui/icons

// core components
import Header from "components/Header/Header1.js";
import HeaderLinks from "components/Header/HeaderLinks1.js";
import Content from "./Content";
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
                height: 50,
                color: "white"
            }}
            {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <Content/>
            </div>
        </div>
        );
}