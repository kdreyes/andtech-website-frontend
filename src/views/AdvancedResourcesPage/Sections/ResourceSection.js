import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CodeIcon from '@material-ui/icons/Code';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ResourceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Button
            rounded
            disabled
            size="lg"
          >
            Coming Soon
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
