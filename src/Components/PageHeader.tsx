import React from "react";
import { Typography, Container } from "@mui/material";
import useStyles from "../style";

interface PropTypes {}

const PageHeader: React.FC<PropTypes> = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "70px",
        border: "1px solid #d6d6d6",
        borderWidth: "1px 0",
      }}
    >
      <Typography className={classes.boldNormal} fontSize="13px">
        Final step
      </Typography>
      &emsp;
      <Typography fontSize="13px" fontWeight="600">
        Check the counterparty assets and proceed to checkout
      </Typography>
    </Container>
  );
};

export default PageHeader;
