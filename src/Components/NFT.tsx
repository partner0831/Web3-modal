import React, { useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import Context from "../Context/GlobalContext";
import PageHeader from "./PageHeader";
import useStyles from "../style";
import arrowRight from "../Images/arrowRight.svg";
import wallet from "../Images/wallet.svg";
import ethereum from "../Images/ethereum.png";
import approved from "../Images/approved.svg";
import SideDrawer from "./SideDrawer";

interface PropTypes {}

const NFT: React.FC<PropTypes> = () => {
  const { isMetamaskConnected, currentAccount } = Context();
  const senderEthAmount = useRef<null | HTMLInputElement>(null);
  const classes = useStyles();
  if (!isMetamaskConnected) return null;
  if (senderEthAmount.current) senderEthAmount.current.value = "0.005 ETH";

  return (
    <>
      <PageHeader />
      <SideDrawer />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1, borderRight: "1px solid #d6d6d6" }}>
            {/* wallet user start */}
            <Box sx={{ display: "flex", my: "1rem" }}>
              <Typography
                className={classes.boldNormal}
                sx={{
                  display: "inline-flex",
                  borderBottom: "3px solid #67f475",
                  fontSize: "1.2rem",
                }}
              >
                My Wallet Assets
              </Typography>
              <Typography
                color="white"
                className={classes.boldNormal}
                sx={{
                  backgroundColor: "#f95515",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "0.3rem",
                  pl: "15px",
                  pr: "13px",
                  ml: "1rem",
                }}
              >
                OUT&nbsp;
                <img src={arrowRight} alt="arrow right" height="10px" />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: "1rem" }}>
              <Box
                sx={{
                  borderRadius: "50px",
                  overflow: "hidden",
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  border: "2px solid rgb(0, 0, 0)",
                  mr: "10px",
                }}
              >
                <img src={wallet} alt="wallet" />
              </Box>
              <Typography
                fontSize="0.85rem"
                letterSpacing="-.7px"
                fontWeight="600"
              >
                {currentAccount || ""}
              </Typography>
            </Box>
            {/* ethereum */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "40px",
                mb: "1rem",
              }}
            >
              <img src={ethereum} alt="" height="20px" width="auto" />
              <Typography
                sx={{ ml: "10px" }}
                fontSize="0.8rem"
                className={classes.boldNormal}
              >
                Ethereum - ETH
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                "& input": {
                  outline: "0",
                  border: "none",
                  background: "#fafafa",
                  height: "100px",
                  borderRadius: "0.25rem",
                  width: "100%",
                  textAlign: "right",
                  fontSize: "1.5rem",
                  color: "#4d4d4d",
                  letterSpacing: "-.3px",
                  pr: "10px",
                },
              }}
            >
              <input
                className={classes.lightNormal}
                readOnly={true}
                ref={senderEthAmount}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "100%",
                  backgroundColor: "#a515f9",
                  backgroundImage: `url('${approved}')`,
                  backgroundSize: "12px auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                }}
              ></Box>
              <Typography
                className={classes.boldNormal}
                sx={{
                  padding: "7px",
                  backgroundColor: "#a515f9",
                  fontSize: "0.8rem",
                  color: "white",
                  borderRadius: "0.3rem",
                  letterSpacing: "-0.4px",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                  opacity: 0,
                  transition: "opacity .5s ease-in-out",
                  "&:hover": { opacity: 1 },
                }}
              >
                These ERC20 tokens are approved
              </Typography>
            </Box>
          </Box>
          {/* wallet user end */}
          {/* wallet client start */}
          <Box sx={{ flex: 1, ml: "25px" }}>
            <Box sx={{ display: "flex", my: "1rem" }}>
              <Typography
                className={classes.boldNormal}
                sx={{
                  display: "inline-flex",
                  borderBottom: "3px solid #67f475",
                  fontSize: "1.2rem",
                }}
              >
                My Wallet Assets
              </Typography>
              <Typography
                color="white"
                className={classes.boldNormal}
                sx={{
                  backgroundColor: "#f95515",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "0.3rem",
                  pl: "15px",
                  pr: "13px",
                  ml: "1rem",
                }}
              >
                OUT&nbsp;
                <img src={arrowRight} alt="arrow right" height="10px" />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: "1rem" }}>
              <Box
                sx={{
                  borderRadius: "50px",
                  overflow: "hidden",
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  border: "2px solid rgb(0, 0, 0)",
                  mr: "10px",
                }}
              >
                <img src={wallet} alt="wallet" />
              </Box>
              <Typography
                fontSize="0.85rem"
                letterSpacing="-.7px"
                fontWeight="600"
              >
                {currentAccount || ""}
              </Typography>
            </Box>
            {/* ethereum */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "40px",
                mb: "1rem",
              }}
            >
              <img src={ethereum} alt="" height="20px" width="auto" />
              <Typography
                sx={{ ml: "10px" }}
                fontSize="0.8rem"
                className={classes.boldNormal}
              >
                Ethereum - ETH
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                "& input": {
                  outline: "0",
                  border: "none",
                  background: "#fafafa",
                  height: "100px",
                  borderRadius: "0.25rem",
                  width: "100%",
                  textAlign: "right",
                  fontSize: "1.5rem",
                  color: "#4d4d4d",
                  letterSpacing: "-.3px",
                  pr: "10px",
                },
              }}
            >
              <input
                className={classes.lightNormal}
                readOnly={true}
                ref={senderEthAmount}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "100%",
                  backgroundColor: "#a515f9",
                  backgroundImage: `url('${approved}')`,
                  backgroundSize: "12px auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                }}
              ></Box>
              <Typography
                className={classes.boldNormal}
                sx={{
                  padding: "7px",
                  backgroundColor: "#a515f9",
                  fontSize: "0.8rem",
                  color: "white",
                  borderRadius: "0.3rem",
                  letterSpacing: "-0.4px",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                  opacity: 0,
                  transition: "opacity .5s ease-in-out",
                  "&:hover": { opacity: 1 },
                }}
              >
                These ERC20 tokens are approved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NFT;
