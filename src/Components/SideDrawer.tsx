import React from "react";
import { Box, Link, Typography } from "@mui/material";
import useStyles from "../style";

interface PropTypes {}

const SideDrawer: React.FC<PropTypes> = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "320px",
        height: "100%",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#1e1e1e",
          boxShadow: "2px 2px 6px #4d4d4d",
          padding: "15px 25px",
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography className={classes.boldNormal} fontSize="1.2rem">
            Transaction
          </Typography>
          {/* client account */}
          <Typography className={classes.boldNormal} fontSize="0.8rem" mt="5px">
            Counterparty Account Selected
          </Typography>
          <Typography fontSize="0.8rem" letterSpacing="-0.7px">
            0x81ba1112caa447436b1f20c4d10364a20bfa20c4
          </Typography>
          {/* my account */}
          <Typography className={classes.boldNormal} fontSize="0.8rem" mt="5px">
            Your Current Account
          </Typography>
          <Typography fontSize="0.8rem" letterSpacing="-0.7px">
            0x81ba1112caa447436b1f20c4d10364a20bfa20c4
          </Typography>
          {/* nft trader fee */}
          <Typography className={classes.boldNormal} fontSize="0.8rem" mt="5px">
            NFT Trader Fee
          </Typography>
          <Typography fontSize="0.8rem" letterSpacing="-0.7px">
            0.005 ETH
          </Typography>
          <Typography
            fontSize="0.8rem"
            letterSpacing="-0.7px"
            ml="20px"
            mt="5px"
          >
            You don't own a TradeSquads. Fee is charged.
          </Typography>
          {/* gas fee */}
          <Typography className={classes.boldNormal} fontSize="0.8rem" mt="5px">
            Estimated Gas Price
          </Typography>
          <Typography fontSize="0.8rem" letterSpacing="-0.7px">
            0.000000000000261495 ETH
          </Typography>
          {/* total */}
          <Typography className={classes.boldNormal} fontSize="0.8rem" mt="5px">
            TOTAL
          </Typography>
          <Typography fontSize="0.8rem" letterSpacing="-0.7px">
            0.000000000000261495 ETH
          </Typography>
        </Box>
        {/* buttons */}
        <Box>
          <Link
            underline="none"
            sx={{
              fontSize: ".9rem",
              height: "50px",
              backgroundColor: "#fcdf60",
              color: "#1e1e1e",
            }}
            className={classes.cFlex + " " + classes.boldNormal}
          >
            <span>CLOSE</span>
          </Link>
          <Link
            underline="none"
            sx={{
              fontSize: ".9rem",
              height: "50px",
              backgroundColor: "#e0e0e0",
              color: "#1e1e1e",
              mt: "5px",
            }}
            className={classes.cFlex + " " + classes.boldNormal}
          >
            <span>APPROVE</span>
          </Link>
          <Link
            underline="none"
            sx={{
              fontSize: ".9rem",
              height: "50px",
              backgroundColor: "#67f475",
              color: "#1e1e1e",
              mt: "5px",
            }}
            className={classes.cFlex + " " + classes.boldNormal}
          >
            <span>PAY NOW</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SideDrawer;
