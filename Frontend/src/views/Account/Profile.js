import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_MESSAGE_MUTATION, MESSAGES_QUERY } from "../../graphql";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Profile(props) {
  const classes = useStyles();
  console.log(props.data);
  const { loading, error, data, refetch } = useQuery(MESSAGES_QUERY, {
    variables: { query: props.data.users[0].name },
    errorPolicy: 'all' 
  });
  console.log(props.data)
  // console.log(data);
  const Messages =(message)=>{
    if (message===null){  
       return(
       <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <CardBody plain>
            <p >
              No messages
            </p>
          </CardBody>
        </Card>
      </GridItem>);
    }
    return (     
    <GridItem xs={12} sm={12} md={4}>
      <Card plain>
        <CardBody plain>
          <p >
            from:{message.senderName}
          </p>
          <p >
            to:{message.receiverName}
          </p>
          <p >
            message:{message.body}
          </p>
        </CardBody>
      </Card>
    </GridItem>)
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Personal Page</h4>
              <p className={classes.cardCategoryWhite}>You can send mails to others or check your mails here </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText={props.data.users[0].name || ""}
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={props.data.users[0].email || ""}
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="TO"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="text"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <CardFooter>
                  <Button color="primary">SEND</Button>
                </CardFooter>
              </GridContainer>
              <GridContainer>
                <h1>Mail Box</h1>
                {data!==undefined ?data.messages.map((message)=>Messages(message)):<div></div>}
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
