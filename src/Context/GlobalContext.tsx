import React, { useState, useEffect, useContext, createContext } from "react";
import { ethers } from "ethers";
import MetaMask from "../Util/Metamask";

interface initialType {
  data: string | null;
  setData: (data: any) => void;
  modalVisibility: boolean;
  setModalVisibility: (visible: boolean) => void;
  currentAccount: string;
  setCurrentAccount: (address: string) => void;
  showNotification: boolean;
  setShowNotification: (visible: boolean) => void;
  toastText: string;
  isMetamaskConnected: Boolean;
  loading: Boolean;
}
const initial = {
  data: null,
};

const GlobalContext = createContext<Partial<initialType>>(initial);

interface PropTypes {
  children: JSX.Element;
}
export const GlobalContextProvider: React.FC<PropTypes> = ({ children }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>(
    "All accounts are disconnected"
  );

  // start metamask
  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const address = await provider.listAccounts();
      if (!address.length) {
        // if metamask access denied
        setCurrentAccount("");
        setModalVisibility(true);
        setLoading(false);
        return;
      }
      // if already has access
      const success = await MetaMask(currentAccount, setCurrentAccount);
      if (success) {
        setModalVisibility(false);
        setToastText(`Account ${currentAccount} connected`);
      }
      setLoading(false);
    };
    init();
    return () => {};
  }, [currentAccount]);
  // end metamask

  const value: initialType = {
    data: data,
    setData: setData,
    modalVisibility: modalVisibility,
    setModalVisibility: setModalVisibility,
    currentAccount: currentAccount,
    setCurrentAccount: setCurrentAccount,
    toastText: toastText,
    showNotification: showNotification,
    setShowNotification: setShowNotification,
    isMetamaskConnected: Boolean(currentAccount?.length),
    loading: loading,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default function Context() {
  return useContext(GlobalContext);
}
