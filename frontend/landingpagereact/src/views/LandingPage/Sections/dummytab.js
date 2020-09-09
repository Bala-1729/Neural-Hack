import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomTabs from "components/CustomTabs/CustomTabs";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
const useStyles = makeStyles(styles);
function VerticalTabs(){
  const classes = useStyles();
  return <CustomTabs
  headerColor="primary"
  tabs={[
    {
      tabName: "Profile",
      tabIcon: Face,
      tabContent: (
        <p className={classes.textCenter}>
          I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that
          things could be at. So when you get something that has
          the name Kanye West on it, it’s supposed to be pushing
          the furthest possibilities. I will be the leader of a
          company that ends up being worth billions of dollars,
          because I got the answers. I understand culture. I am
          the nucleus.
          <div className={classes.textCenter}>
        I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that
          things could be at. So when you get something that has
          the name Kanye West on it, it’s supposed to be pushing
          the furthest possibilities. I will be the leader of a
          company that ends up being worth billions of dollars,
          because I got the answers. I understand culture. I am
          the nucleus.
        </div>
        </p>
      )
    },
    {
      tabName: "Messages",
      tabIcon: Chat,
      tabContent: (
        <p className={classes.textCenter}>
          I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that
          things could be at. I will be the leader of a company
          that ends up being worth billions of dollars, because I
          got the answers. I understand culture. I am the nucleus.
          I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that
          things could be at.
        </p>
      )
    },
    {
      tabName: "Settings",
      tabIcon: Build,
      tabContent: (
        <p className={classes.textCenter}>
          think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that
          things could be at. So when you get something that has
          the name Kanye West on it, it’s supposed to be pushing
          the furthest possibilities. I will be the leader of a
          company that ends up being worth billions of dollars,
          because I got the answers. I understand culture. I am
          the nucleus.
        </p>
      )
    }
  ]}
/>;
}


