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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ImageUploader from "react-images-upload";
import { useQuery, useMutation, query } from '@apollo/react-hooks'
import {
  CREATE_FOUNDITEM_MUTATION
} from '../../graphql'

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

export default function Found() {
  const classes = useStyles();
  const [itemName, setItemName] = useState("");
  const [foundLocation, setFoundLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [imageUploaded, setImageUploaded] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [addFoundItem] = useMutation(CREATE_FOUNDITEM_MUTATION)
  const reader = new FileReader();
  const uploaded = async (pictureFiles, pictureDataURLs) => {
    await reader.readAsDataURL(pictureFiles[pictureFiles.length - 1]);
  };
  reader.onload = () => {
    setImageUploaded((state) => [...state, reader.result]);
  };

  const changeFoundItemName = (event) => {
    setItemName(event.target.value);
  }
  const changeFoundLocation = (event) => {
    setFoundLocation(event.target.value);
  }
  const changeDescriptions = (event) => {
    setDescriptions(event.target.value);
  }
  const changeCurrentLocation = (event) => {
    setCurrentLocation(event.target.value);
  }
  const sendInfo = useCallback(
    (e) => {

      if (!itemName || !foundLocation || !currentLocation || !descriptions || !imageUploaded) return

      addFoundItem({
        variables: {
          name: itemName,
          foundLocation: foundLocation,
          currentLocation: currentLocation,
          descriptions: descriptions,
          images: imageUploaded,
          isReturned: false
        }
      })

      setItemName("");
      setFoundLocation("");
      setCurrentLocation("");
      setDescriptions("");
      setImageUploaded("");

    }, [addFoundItem, itemName, foundLocation, currentLocation, descriptions, imageUploaded]
  )

  return (
    <>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Found Item Information
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Please provide as many details as possible
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Item Name"
                      id="foundItemName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeFoundItemName}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Where you found"
                      id="foundLocation"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeFoundLocation}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Where is it now"
                      id="currentLocation"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      change={changeCurrentLocation}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Descriptions"
                      id="foundItemDescriptions"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 10,
                      }}
                      change={changeDescriptions}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={sendInfo}>Send</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <ImageUploader
          withIcon={true}
          className="foundItem"
          buttonText="Upload"
          onChange={uploaded}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={52428800}
          label="upload one or more images of the item"
          withPreview={true}
        />
      </div>
    </>
  );
}
