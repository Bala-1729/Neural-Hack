/*eslint-disable*/
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// @material-ui/icons
import { Person, Apps ,GitHub, Home, Dashboard } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [flag, setFlag] = React.useState(false);
  const Submit = (e) => {
    localStorage.setItem('token','');
    setFlag(true);
  };
  const Test = () => {
    if (flag) return <Redirect to="/landing-page" />;
    else console.log("");
  };
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {Test()}
      <ListItem className={classes.listItem}>
        <Button
          href="/dashboard"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <DashboardIcon className={classes.icons} /> Dashboard
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Others"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to={"/profile"} className={classes.dropdownLink}>
              Profile
            </Link>,
            <Link to={"/predict"} className={classes.dropdownLink}>
              Predict
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          onClick={Submit}
          color="danger"
          target="_self"
          className={classes.navLink}
        >
          <Person className={classes.icons} /> Logout
        </Button>
      </ListItem>
    </List>
  );
}
