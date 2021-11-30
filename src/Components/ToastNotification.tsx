import React, { useEffect } from "react";
import { Box, Slide } from "@mui/material";
import Context from "../Context/GlobalContext";
import useStyles from "../style";

interface PropTypes {}

const ToastNotification: React.FC<PropTypes> = () => {
  const {
    isMetamaskConnected,
    loading,
    currentAccount,
    toastText,
    showNotification,
    setShowNotification,
  } = Context();
  const classes = useStyles();
  // on start check if metamask is connected
  // if connected show connected else show disconnected
  // on new connect show connected
  const runToast = () => {
    if (setShowNotification) setShowNotification(true);
    const timeout = setTimeout(() => {
      if (setShowNotification) setShowNotification(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    //dont show disconnected if metamask is connected
    // if (isMetamaskConnected) return;
    if (loading) return;
    return runToast();
  }, [loading, isMetamaskConnected, currentAccount]);

  if (!showNotification) return null;

  return (
    <Slide
      mountOnEnter
      unmountOnExit
      in={showNotification}
      direction="right"
      timeout={400}
    >
      <Box
        sx={{
          bottom: "30px",
          position: "fixed",
          padding: "10px",
          fontSize: ".8rem",
          color: "#000",
          borderRadius: ".3rem",
          zIndex: "99999999999999999",
          background: isMetamaskConnected ? "#99ff8c" : "#fcdf60",
          boxShadow: "1px 1px 2px #a7a7a7",
          letterSpacing: "-.7px",
          left: "50px",
        }}
        className={classes.boldNormal}
      >
        {toastText}
      </Box>
    </Slide>
  );
};

export default ToastNotification;
