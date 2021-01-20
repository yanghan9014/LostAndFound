import React, { useState } from "react";
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
  FOUNDITEMS_QUERY
} from '../../graphql'
//import db from "../../assets/mockDB.js"
/*import { Switch, Route, Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";*/

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { useQuery } from '@apollo/react-hooks';

//import { Redirect } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const [expand, setExpand] = useState(false)
  const [select, setSelect] = useState(-1)
	const { loading, error, data } = useQuery(FOUNDITEMS_QUERY)
  const classes = useStyles()
  return (
    <>
      {/*<Switch>
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
      {(expand)?
      <>
      <Button color="primary" onClick={()=>{
        setExpand(false)
      }}>Back</Button>

        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Is this what you've lost?
                </h4>
                <p className={classes.cardCategoryWhite}>
                  
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    Item name:  {data.map((item, id)=>{
                      if(id === select){return item.name}})
                    }<br></br>
                    Found Location:  {data.map((item, id)=>{
                      if(id === select){return item.foundLocation}})
                    }<br></br>
                    Found Time:  {/*data.map((item, id)=>{
                      if(id === select){return item.foundTime}})
                    */ }<br></br>
                    Descriptions:  {data.map((item, id)=>{
                      if(id === select){return item.descriptions}})
                    }<br></br><br></br>
                    Finder:  {/*data.map((item, id)=>{
                      if(id === select){return item.finder}})
                    */}<br></br>
                    Finder contact:  {data.map((item, id)=>{
                      if(id === select){return item.email}})
                    }<br></br>
                  </GridItem>

                  <GridItem  xs={12} sm={12} md={4}>
                    <img src={data.map((item, id)=>{
                      if(id === select){return item.images}})
                    }/>
                    <br></br>

                  </GridItem>

                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={()=>{
                  console.log("Hello")
                }}>Send</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </>
      :
      <GridContainer>
        {data.map((item, id)=>
        <>
          <GridItem xs={12} sm={6} md={3}>
              <Card onClick={()=> { 
                setExpand(true)
                setSelect(id)
                console.log(id)
              }}>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>{item.itemName}</h4>
                  <p className={classes.cardCategoryWhite}>
                    {item.place}
                  </p>
                </CardHeader>
                <CardBody>
                  <img src={item.photo}></img>
                  <p>
                  Location: {item.place}<br></br>
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
