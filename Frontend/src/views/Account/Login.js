import React, { useState, useCallback } from "react";
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

import avatar from "assets/img/faces/marc.jpg";
// import bcrypt from "bcrypt";
// const encode = async (password) => {
//   const saltRounds = 10;
//   const hash = await bcrypt.hash(password, saltRounds);
//   return hash;
// };
import {
  CREATE_USER_MUTATION,
  LOGIN_QUERY,
  // CREATE_NOWUSER_MUTATION,
} from "../../graphql";

import { useMutation, useQuery } from "@apollo/react-hooks";

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

export default function Login(props) {
  const classes = useStyles();
  const [haveAccount, setHaveAccount] = useState(true);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [addUser] = useMutation(CREATE_USER_MUTATION);
  // const [addNowUser] = useMutation(CREATE_NOWUSER_MUTATION);
  const { loading, error, data, refetch } = useQuery(LOGIN_QUERY, {
    variables: { query: { name: userName, password: passWord } },
  });
  // console.log(data)
  const handleUserLonin = async () => {
    await refetch();
    // console.log(data);
    if (data.login.Login) {
      props.changeLogin(true);
      props.changeName(userName);
      // await addNowUser({
      //   variables: { data: userName },
      // });
    } else {
      setUserName("");
      setPassWord("");
      alert("Not valid user");
    }
  };
  const handleUserSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!userName || !passWord || !email) return;

      addUser({
        variables: {
          name: userName,
          password: passWord,
          email: email,
        },
      });
      // addNowUser({
      //   variables: userName,
      // });
      props.changeLogin(true);
      props.changeName(userName);

      setUserName("");
      setPassWord("");
      setEmail("");
    },
    [addUser, userName, passWord, email]
  );
  // const handleNowUser = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     addNowUser({
  //       variables: userName,
  //     });
  //   },
  //   [addNowUser, userName]
  // );
  const changeUserName = (event) => {
    setUserName(event.target.value);
  };
  const changePassWord = (event) => {
    setPassWord(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  //   console.log(userName);
  return (
    <div>
      {haveAccount ? (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Log in</h4>
                <Button
                  color="primary"
                  // className={classes.cardCategoryWhite}
                  onClick={() => setHaveAccount(false)}
                >
                  Do not have an account ?
                </Button>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeUserName}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Password"
                      id="Password" //change from emailadress to password
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changePassWord}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={handleUserLonin}>
                  Enter
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Create a account</h4>
                <p className={classes.cardCategoryWhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeUserName}
                      value={userName}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Password"
                      id="Password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changePassWord}
                      value={passWord}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeEmail}
                      value={email}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      About me
                    </InputLabel>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about-me"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={handleUserSubmit}>
                  register
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      )}
    </div>
  );
}
