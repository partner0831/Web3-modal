import React from "react";
import {} from "@mui/material";
import ToastNotification from "./ToastNotification";
import NFT from "./NFT";

interface PropTypes {}

const Content: React.FC<PropTypes> = () => {
  return (
    <>
      <ToastNotification />
      <NFT />
    </>
  );
};

export default Content;
