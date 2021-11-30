import { ethers } from "ethers";

const Metamask = async (
  currentAccount: string,
  setCurrentAccount: (address: string) => void,
  showNotification?: (yes: boolean) => void
): Promise<boolean> => {
  function handleAccountsChanged(accounts: string[], warining = true) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      if (warining) console.log("Please connect to MetaMask.");
      if (warining) alert("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      if (setCurrentAccount) setCurrentAccount(accounts[0]);
    }
  }
  try {
    if (typeof (window as any).ethereum === "undefined") {
      throw new Error("No crypto wallet found. Please install it.");
    }

    //request access
    await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    //start ethers
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    //  start onchange
    /**********************************************************/
    /* Handle chain (network) and chainChanged (per EIP-1193) */
    /**********************************************************/

    provider.on("chainChanged", () => window.location.reload());
    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    provider.on("accountsChanged", handleAccountsChanged);
    //  end onchange

    const accounts = await provider.listAccounts();
    if (accounts.length) handleAccountsChanged(accounts, false);
    return true;
  } catch (err) {
    return false;
  }
};
export default Metamask;
