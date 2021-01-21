import React, { useState, useCallback } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
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
import ImageUploader from "react-images-upload";
import { useQuery, useMutation, query } from "@apollo/react-hooks";
import { CREATE_LOSTITEM_MUTATION, CHECKNOWUSER_QUERY } from "../../graphql";

//import avatar from "assets/img/faces/marc.jpg";

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

export default function Lost() {
  const classes = useStyles();
  const [losterName, setLosterName] = useState("");
  const [lostTime, setLostTime] = useState("");
  const [itemName, setItemName] = useState("");
  const [lostLocation, setLostLocation] = useState("");
  const [imageUploaded, setImageUploaded] = useState([]);
  const [descriptions, setDescriptions] = useState("");
  const [rewards, setRewards] = useState("");
  const [addLostItem] = useMutation(CREATE_LOSTITEM_MUTATION);
  const [user, setUser] = useState("");
  const [lostTime, setLostTime] = useState("");

  const { loading, error, data, refetch } = useQuery(CHECKNOWUSER_QUERY, {
    variables: { query: user },
  });
  const handleUserIsIn = async () => {
    await refetch();
    // console.log(data);
    if (data.checkNowUser) {
      alert("success");
    } else {
      alert("Not valid user");
    }
  };
  const reader = new FileReader();
  const uploaded = async (pictureFiles, pictureDataURLs) => {
    await reader.readAsDataURL(pictureFiles[pictureFiles.length - 1]);
  };
  reader.onload = () => {
    setImageUploaded((state) => [...state, reader.result]);
  };

  const changeLosterName = (event) => {
    setLosterName(event.target.value);
  }
  const changeLostTime = (event) => {
    setLostTime(event.target.value);
  }
  const changeLostItemName = (event) => {
    setItemName(event.target.value);
  };
  const changeLostLocation = (event) => {
    setLostLocation(event.target.value);
  };
  const changeDescriptions = (event) => {
    setDescriptions(event.target.value);
  };
  const changeRewards = (event) => {
    setRewards(event.target.value);
  };
  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changeLostTime = (event) => {
    setLostTime(event.target.value);
  };
  const sendInfo = useCallback(
    async (e) => {

      if (!losterName || !lostTime || !itemName || !lostLocation || !descriptions || !imageUploaded || !rewards)
      {
        alert("Please fill in all entries")
        return
      }
      await addLostItem({
        variables: {
          name: itemName,
          lostLocation: lostLocation,
          descriptions: descriptions,
          images: imageUploaded,
          isFound: false,
<<<<<<< HEAD
          rewards: rewards,
          loster: user,
          lostTime: lostTime,
        },
      });
=======
          rewards:rewards,
          loster: losterName,
          lostTime: lostTime
        }
      })
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f

      setItemName("");
      setLostLocation("");
      setDescriptions("");
      setImageUploaded("");
<<<<<<< HEAD
    },
    [addLostItem, itemName, lostLocation, descriptions, imageUploaded]
  );
=======
      window.location.reload();
    }, [addLostItem, itemName, lostLocation, descriptions, imageUploaded, rewards, losterName, lostTime]
  )
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Lost Item Information</h4>
              <p className={classes.cardCategoryWhite}>
                Please provide as many details as possible
              </p>
            </CardHeader>
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="losterName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeLosterName}
                  />
                </GridItem>
                
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Item Name"
                    id="lostItemName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeLostItemName}
                    value={itemName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="When you lost"
                    id="lostTime"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeLostTime}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Where you lost"
                    id="lostLocation"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeLostLocation}
                    value={lostLocation}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Who Lost"
                    id="lostItemName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeUser}
                    value={user}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="When you lost"
                    id="lostLocation"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeLostTime}
                    value={lostTime}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Rewards"
                    id="rewards"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    change={changeRewards}
                    value={rewards}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Descriptions"
                    id="lostItemDescriptions"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                    change={changeDescriptions}
                    value={descriptions}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={sendInfo}>
                Send
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <ImageUploader
                withIcon={true}
                className="foundItem"
                buttonText="Upload"
                onChange={uploaded}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
<<<<<<< HEAD
                maxFileSize={52428800000}
=======
                maxFileSize={524288000}
>>>>>>> 3f6dc90c37ccfb87b6e4f22bfb0616216d89e58f
                label="upload one or more images of the item"
                withPreview={true}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
