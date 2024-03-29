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
import {
  FOUNDITEMS_QUERY
} from '../../graphql'

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function HomeFound() {
  const classes = useStyles();
	const { loading, error, data, refetch } = useQuery(FOUNDITEMS_QUERY)
  return (
    <div>{
      (data === undefined)? console.log("data undefined") :
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Recently Found</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Item Name", "Found Time", "Found Location", "CurrentLocation"]}
                tableData={data.foundItems.map((item, id)=>{
                  return [item.name, item.foundTime, item.foundLocation, item.currentLocation]
                })
                }
              />
            </CardBody>
          </Card>}
    </div>
  );
}
