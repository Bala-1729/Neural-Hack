/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Person, GitHub, Home } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button
          href="../landing-page"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
        <Home className={classes.icons} /> Home
      </Button>
      <Button
          href="../login-page"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
        <Person className={classes.icons} /> Login/Register
      </Button>
      <Button
          href="../instantUser"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
        <Person className={classes.icons} /> One Time User?
      </Button>
        {/*<CustomDropdown
          noLiPadding
          buttonText="Login/Register"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Person}
          dropdownList={[
            <Link to={"../login-page"} className={classes.dropdownLink}>
              Login
            </Link>,
            <Link to={"/login-page"} className={classes.dropdownLink}>
              Register
            </Link>
          ]}
        />*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="AI"
          title="Download AIML Source Code"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/Bala-1729/diabetes-prediction-django"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <GitHub className={classes.icons} /> AIML Geek?
          </Button>
        </Tooltip>
      </ListItem>
      
    </List>
  );
}
