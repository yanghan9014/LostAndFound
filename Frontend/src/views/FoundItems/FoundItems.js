import React, { useState, useCallback } from "react";
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
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import {
  FOUNDITEMS_QUERY, UPDATE_FOUNDITEM_MUTATION
} from '../../graphql'
//import db from "../../assets/mockDB.js"
/*import { Switch, Route, Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";*/

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { useQuery, useMutation } from '@apollo/react-hooks';

//import { Redirect } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const [expand, setExpand] = useState(false)
  const [select, setSelect] = useState(-1)
  const { loading, error, data } = useQuery(FOUNDITEMS_QUERY)
  const [updateFoundItem] = useMutation(UPDATE_FOUNDITEM_MUTATION)
  const classes = useStyles()

  const updateInfo = useCallback(
    async (e) => {
      const foundItem = data.foundItems[select]

      console.log(foundItem)
      await updateFoundItem({
        variables: {
          _id: foundItem._id,
        }
      })
      console.log(foundItem)
      setSelect(-1);
      setExpand(false);
    }, [updateFoundItem, data, select]
  )
  return (
    <>
      {console.log(data)/*<Switch>
        {db.lostItem.map((item, _id)=>{
          return(
          <Route path={`/${_id}`}>
            {singleItem_display(1)}
          </Route>
          )
        })}
      <Route path={`/FoundItems/1`}>
        {singleItem_display(1)}
      </Route>*/}
      {
      (data === undefined)? console.log("data undefined") :
      (expand)?
      <>
      <Button color="primary" onClick={()=>{
        setExpand(false)
      }}>Back</Button>

        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>
                  Is this what you've lost?
                </h4>
                <p className={classes.cardCategoryWhite}>
                  
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    Item name:  {data.foundItems[select].name
                    }<br></br>
                    Found Location:  {data.foundItems[select].foundLocation
                    }<br></br>
                    Found Time:  {data.foundItems[select].foundTime
                    }<br></br>
                    Descriptions:  {data.foundItems[select].descriptions
                    }<br></br><br></br>
                    Finder:  {data.foundItems[select].founder
                    }<br></br>
                  </GridItem>

                  <GridItem  xs={12} sm={12} md={4}>
                    <img src={data.foundItems[select].images
                    } width="88%" height="88%"/>
                    <br></br>

                  </GridItem>

                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={()=>{
                  setExpand(false)
                }}>Claim</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </>
      :
      <GridContainer>
        {data.foundItems.map((item, id)=>
        <>
          <GridItem xs={12} sm={6} md={3}>
              <Card onClick={()=> { 
                setExpand(true)
                setSelect(id)
                console.log(id)
              }}>
                <CardHeader color="warning">
                  <h4 className={classes.cardTitleWhite}>{item.name}</h4>
                  <p className={classes.cardCategoryWhite}>
                    {item.foundLocation}
                  </p>
                </CardHeader>
                <CardBody>
                  <img src={item.images[0]} width="88%" height="66%"></img>
                  <p>
                  Location: {item.foundLocation}<br></br>
                  Time: {item.foundTime}
                </p>
                </CardBody>
              </Card>
            
          </GridItem>
        </>
        )}
      </GridContainer>
    
      }
    </>
  );
}
