import React from "react";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Chart from "./Chart";
import PatientTable from "./Table";
//icons
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AccessibleIcon from "@material-ui/icons/Accessible";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);


export default function LoginPage(props) {
  Load()
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [total, setTotal] = React.useState(0);
  const [positive, setPositive] = React.useState(0);
  const [negative, setNegative] = React.useState(0);
  const token = localStorage.getItem("token");
  const dummmy = () => {
    if (token === "") {
      return <Redirect to="/landing-page" />;
    }
  };
  async function Load() {
    try {
        const response = await axios({
        url: "http://localhost:8000/api/medicalData/",
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data1 = await response.data;
      setTotal(data1.length);
      setNegative(data1.negative);
      setPositive(data1.positive);
      return data1;
    } catch (error) {
      console.log(error);
    }
  }
  dummmy();
  Load();
  console.log(total, positive, negative);
  return (
    <div className={classes.container}>
      <GridContainer justify="space-between">
        {dummmy()}
        <GridItem xs={12} sm={4} md={3}>
          <Card className={classes[cardAnimaton]}>
            <CardHeader color="blue" className={classes.cardHeader}>
              <AccessibleIcon
                className={classes.icons}
                style={{ fontSize: 40 }}
              />
              <h4>Patients Analysed</h4>
            </CardHeader>
            <CardBody className={classes.cardBody}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontWeight: "bold" }}>{total} Patients</h3>
              </div>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <h6 style={{ fontSize: 10 }}>
                Total number of Patients Analysed
              </h6>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Card className={classes[cardAnimaton]}>
            <CardHeader color="success" className={classes.cardHeader}>
              <RemoveIcon className={classes.icons} style={{ fontSize: 40 }} />
              <h4>Predicted Negative</h4>
            </CardHeader>
            <CardBody className={classes.cardBody}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontWeight: "bold" }}>{positive} Patients</h3>
              </div>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <h6 style={{ fontSize: 10 }}>Total number of Negative Cases</h6>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Card className={classes[cardAnimaton]}>
            <CardHeader color="danger" className={classes.cardHeader}>
              <AddIcon className={classes.icons} style={{ fontSize: 40 }} />
              <h4>Predicted Positive</h4>
            </CardHeader>
            <CardBody className={classes.cardBody}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontWeight: "bold" }}>{negative} Patients</h3>
              </div>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <h6 style={{ fontSize: 10 }}>Total Number of Positive Cases</h6>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <p style={{ padding: 50 }} />
      <Chart />
      <PatientTable />
    </div>
  );
}


// const Load = (e) => {
//   axios
//     .get("http://localhost:8000/api/medicalData/", {
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//     })
//     .then((res) => {
//       setTotal(res.data.length);
//       setPositive(res.data.positive);
//       setNegative(res.data.negative);
//       localStorage.setItem("positive", res.data.positive);
//       localStorage.setItem("negative", res.data.negative);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };