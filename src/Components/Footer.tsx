import React from "react";
import { Container, Box, Typography } from "@mui/material";
import useStyles from "../style";
import heart from "../Images/heart.svg";

interface PropTypes {}

const Footer: React.FC<PropTypes> = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box className={classes.hFlex}>
        <div></div>
        <Box sx={{ py: "0.75rem" }}>
          <Typography
            className={classes.lightNormal}
            sx={{ fontWeight: 700, letterSpacing: "-.7px" }}
          >
            Developed with
            <img src={heart} alt="heart" width="15px" height="auto" />
            by Salad Labs Inc.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
