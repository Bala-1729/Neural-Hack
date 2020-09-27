import React from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import PieChart from "./PieChart";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Badge from "components/Badge/Badge.js";

let rows = [];
const token = localStorage.getItem("token");
async function Load() {
  try {
    const response = await axios({
      url: "http://localhost:8000/api/pastWeek/",
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.data.data;
    console.log(data)
    rows = data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

const useStyles = makeStyles(styles);
export default function SectionTabs(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  Load();
  return (
    <GridContainer justify="space-between " alignItems="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card className={classes[cardAnimaton]}>
          <CardHeader color="blue" className={classes.cardHeader}>
            <h4>Last Week Analysis</h4>
          </CardHeader>
          <CardBody className={classes.cardBody}>
            <ResponsiveContainer width="100%" minHeight={250}>
              <LineChart
                width={730}
                height={250}
                data={rows}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#00b0e0" />
                <Line type="monotone" dataKey="negative" stroke="#82ca9d" />
                <Line type="monotone" dataKey="positive" stroke="#ec0101" />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <h6 style={{ fontSize: 10 }}>Past 7 Days Patient Data Analysis</h6>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4} justify="center">
        <Card className={classes[cardAnimaton]}>
          <CardHeader color="blue" className={classes.cardHeader}>
            <h4>Positive : Negative</h4>
          </CardHeader>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={12} sm={12} md={12} align="center">
              <ResponsiveContainer width="100%" minHeight={250}>
                <PieChart />
              </ResponsiveContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} align="center">
              <Badge color="danger">Positive</Badge>
              <Badge color="success">Negative</Badge>
            </GridItem>
          </GridContainer>
          <CardFooter className={classes.cardFooter}>
            <h6 style={{ fontSize: 10 }}>Positive vs Negative Percentage</h6>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

