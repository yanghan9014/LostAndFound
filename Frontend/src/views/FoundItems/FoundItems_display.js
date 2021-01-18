import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import db from "../../assets/mockDB.js"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
          <GridItem xs={12} sm={6} md={5}>
            {db.lostItem.map((item, id)=>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>{item.itemName}</h4>
                  <p className={classes.cardCategoryWhite}>
                    {item.place}
                  </p>
                </CardHeader>
                <CardBody>
                  <img src={item.photo}></img>
                </CardBody>
              </Card>
            )}
          </GridItem>
      </GridContainer>
    </>
  );
}
