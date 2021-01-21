import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import {
  LOSTITEMS_QUERY
} from '../../graphql'

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function HomeLost() {
  let history = useHistory();
  const classes = useStyles();
  const { loading, error, data, refetch } = useQuery(LOSTITEMS_QUERY)

  return (
    <div>{
      (data === undefined )? console.log("data undefined") :
          <Card onClick={()=>
            history.push("LostItems")}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Recently Lost</h4>
              <p className={classes.cardCategoryWhite}>
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Item Name", "Lost Time", "Lost Location", "Rewards"]}
                tableData={data.lostItems.map((item, id)=>{
                  return [item.name, item.lostTime, item.lostLocation, item.rewards]
                })
                }
              />
            </CardBody>
          </Card>}
    </div>
  );
}
