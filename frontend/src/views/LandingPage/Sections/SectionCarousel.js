import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/Picture1.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <h2 style={{color:"black"}} align="center">Model Explanation</h2>
        <GridContainer alignItems="center">
          <GridItem align="center" xs={12} sm={4} md={4}>
            <h3>1)Identifying The Problem</h3>
            <p>
              The problem is to predict the whether the person having diabetes
              or not by taking some parameters like Pregnancies, Glucose,
              BloodPressure, SkinThickness ect, as a input based upon those
              parameters the system will predict a person is diabetic or
              non-diabetic.
            </p>
          </GridItem>
          <GridItem align="center" xs={12} sm={4} md={4}>
            <h3>2)Data Acquisition</h3>
            <p>
              We gather this data in the kaggle repository.And we analyzed the
              data by ploting some graphs like histograms,scatter plots these
              analysis helps us to identify the outliers and missing values and
              inconsistent data.
            </p>
          </GridItem>
          <GridItem align="center" xs={12} sm={4} md={4}>
            <h3>3)Data Preparation</h3>
            <p>
              From the above data exploration, we saw an outlier of
              SkinThickness so we removed those outliers because of outliers the
              model won’t perform well .And there are some missing values we
              replaced zero value of Glucose, BloodPressure, SkinThickness,
              Insulin, BMI with mean for each class.
            </p>
          </GridItem>
          <GridItem align="center" xs={12} sm={4} md={4}>
            <h3>4)Modeling & Evaluating</h3>
            <p>
              Before Modeling we need to split the dataset into two parts in the
              ration 7:3.We divided the data into two parts train data and test
              data.
              <br />
              We have tested a series of algorithms for comparing accuracy.
            </p>
            <p>
              1)Naive Bayes 2)K-Nearest Neighbors(KNN)<br/> 3)Decision Tree 4)Random
              Forest <br/> 5)AdaBoost Classifier 6)GradientBoosting Classifier
            </p>
          </GridItem>
          <GridItem align="center" xs={12} sm={4} md={4}>
            <img src={image1} style={{width:350, height:350}} alt="flowchart"/>
          </GridItem>
          <GridItem align="center" xs={12} sm={4} md={4}>
            <h3>5)Optimizing & Deployment</h3>
            <p>
              Gradient boosting is a machine learning technique for regression
              and classification problems, which produces a prediction model in
              the form of an ensemble of weak prediction models, typically
              decision trees.
            </p>
            <p>
              Finally we deployed the Gradient boosting model for predicting the
              diabetes in our project which gives best accuracy as 86% (0.8614718614718615).
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
