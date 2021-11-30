import React from "react";
import {
  Box,
  MenuItem,
  Link,
  useScrollTrigger,
  Typography,
} from "@mui/material";
import userIcon from "../Images/userIcon.svg";
import logo from "../logo.svg";
import discord from "../Images/discord.svg";
import twitter from "../Images/twitter.svg";
import theme from "../MUITheme";
import useStyles from "../style";
import Context from "../Context/GlobalContext";

import Web3 from "web3";
import Web3Modal from "web3modal";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";

import Portis from "@portis/web3";

interface PropTypes {}

const providerOptions = {
  // portis: {
  //   package: Portis, // required
  //   options: {
  //     id: "8e23465f-c9a7-410a-92df-18b2e3d1c38f",
  //     network: "maticMumbai",
  //   },
  // },
  walletconnect: {
    display: {
      name: "Mobile",
      description: "Scan qrcode with your mobile wallet",
    },
    package: WalletConnectProvider,
    options: {
      infuraId: "fcabf544f26e3e6511e750e508fd6492", // required
    },
  },
};

const Header: React.FC<PropTypes> = () => {
  const {
    setModalVisibility,
    currentAccount,
    setCurrentAccount,
    isMetamaskConnected,
  } = Context();
  const classes = useStyles();
  let provider: any;
  const menuItems = [
    { name: "Game of Trades", url: "#" },
    { name: "How to Trade", url: "#" },
    { name: "Make a trade", url: "#" },
    { name: "My Trades", url: "#" },
    { name: "Deals History", url: "#" },
    { name: "TradeSquads", url: "#" },
    { name: "Mint Trade Squad", url: "#" },
  ];

  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    // network: "testnet", // optional
    theme: "dark",
  });

  const toggleModal = async () => {
    await onConnect();
    // if (setModalVisibility) setModalVisibility(true);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  async function onConnect() {
    try {
      provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      if (setCurrentAccount) setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  }
  const headerClass = trigger ? classes.headerClass : "";
  console.log(trigger);
  return (
    <header className={headerClass}>
      {/* topbar notification */}
      <Box
        className={classes.cFlex + " notification-bar"}
        sx={{ backgroundColor: theme.palette.secondary.main, height: "40px" }}
      >
        <Link
          href="#"
          color={theme.palette.common.white}
          underline="hover"
          className={classes.lightNormal}
          sx={{ fontWeight: 700, letterSpacing: "-.7px" }}
        >
          Trade Squad NFT owners pay no trading fees! Mint now - Clean your
          cache if you're experiencing some issue
        </Link>
      </Box>
      {/* topbar */}
      <Box
        className={classes.hFlex}
        sx={{
          backgroundColor: theme.palette.common.black,
          height: "30px",
          px: "15px",
        }}
      >
        <Box mt="4px">
          <img src={discord} alt="discord" />
          &emsp;
          <img src={twitter} alt="twitter" />
        </Box>
        {!isMetamaskConnected && (
          <Link onClick={toggleModal} sx={{ cursor: "pointer" }}>
            CONNECT WALLET
          </Link>
        )}
        {isMetamaskConnected && (
          <Box className={classes.hFlex}>
            <Typography
              fontSize="0.7rem"
              color="#59b3ae"
              sx={{
                "&::after": {
                  content: '""',
                  position: "relative",
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  backgroundColor: "currentColor",
                  cursor: "pointer",
                },
              }}
            >
              MAIN NET&nbsp;
            </Typography>
            <Typography fontSize="0.7rem" color="common.white">
              &emsp;&nbsp;
              {currentAccount?.substr(0, 5) +
                "..." +
                currentAccount?.slice(currentAccount?.length - 4)}
            </Typography>
            &emsp;&nbsp;
            <Box
              sx={{
                overflow: "hidden",
                height: "18px",
                width: "18px",
                borderRadius: "50px",
                border: "2px solid #000",
                cursor: "pointer",
              }}
            >
              <img src={userIcon} alt="" />
            </Box>
          </Box>
        )}
      </Box>
      {/* Header */}
      <Box className={classes.hFlex} sx={{ pl: "24px" }}>
        <Box className={classes.logo} sx={{ pl: "4px", py: "8px" }}>
          <img src={logo} alt="logo" />
        </Box>
        <Box sx={{ display: "flex" }}>
          {menuItems.map((item, i) => (
            <MenuItem key={i} className={classes.menuItem}>
              {item.name}
            </MenuItem>
          ))}
        </Box>
      </Box>
    </header>
  );
};

export default Header;
