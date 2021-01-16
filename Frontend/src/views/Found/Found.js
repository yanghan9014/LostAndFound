import React, { useState, useEffect } from "react";
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
  const [imageUploaded, setImageUploaded] = useState("");
  const [url, setUrl] = useState("");
  const reader = new FileReader();
  const uploaded = async (pictureFiles, pictureDataURLs) => {
    await console.log(pictureFiles);
    // await setImageUploaded(pictureFiles);

    await reader.readAsDataURL(pictureFiles[pictureFiles.length - 1]);
    // await setImageUploaded(reader);
  };
  reader.onload = () => {
    setImageUploaded((state) => [...state, reader.result]);
  };
  useEffect(() => console.log(imageUploaded), [imageUploaded]);

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
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Where you found"
                      id="foundLocation"
                      formControlProps={{
                        fullWidth: true,
                      }}
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
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Send</Button>
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
        />
      </div>
    </>
  );
}
