import React from "react";
import Metamask from "../Util/Metamask";
import Context from "../Context/GlobalContext";
import Web3 from "web3";
import Web3Modal from "web3modal";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
const providerOptions = {
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

const web3Modal = new Web3Modal({
  providerOptions, // required
  disableInjectedProvider: false,
  // network: "testnet", // optional
  theme: "dark",
});

interface PropTypes {}

const Modal: React.FC<PropTypes> = () => {
  const {
    modalVisibility,
    currentAccount,
    setCurrentAccount,
    isMetamaskConnected,
  } = Context();

  let provider: any;
  async function onConnect() {
    try {
      provider = await web3Modal.toggleModal();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      if (setCurrentAccount) setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  }

  const initMetamask = () => {
    if (currentAccount !== undefined && setCurrentAccount) {
      //web3Modal.connect();
      onConnect();
    }
  };

  return (
    <>{Boolean(modalVisibility && !isMetamaskConnected) && initMetamask()}</>
  );
};

export default Modal;
