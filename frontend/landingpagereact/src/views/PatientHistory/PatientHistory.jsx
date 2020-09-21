// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// import styles from "assets/jss/material-kit-react/views/loginPage.js";

// import image from "assets/img/bg001.jpg";
// // @material-ui/icons

// // core components
// import Header from "components/Header/Header1.js";
// import HeaderLinks from "components/Header/HeaderLinks1.js";
// import PatientTable from "../Dashboard/sections/Table";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import TextField from "@material-ui/core/TextField"
// const dashboardRoutes = [];

// const useStyles = makeStyles(styles);
// export default function LandingPage(props) {
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
//       <Header
//         color="transparent"
//         routes={dashboardRoutes}
//         brand="Material Kit React"
//         rightLinks={<HeaderLinks />}
//         fixed
//         changeColorOnScroll={{
//           height: 50,
//           color: "white",
//         }}
//         {...rest}
//       />
//       <div
//         className={classes.pageHeader}
//         style={{
//           backgroundImage: "url(" + image + ")",
//           backgroundSize: "cover",
//           backgroundPosition: "top center",
//         }}
//       >
//         <PatientTable/>
//       </div>
//     </div>
//   );
// }
