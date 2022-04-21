import { CHAIN_ID } from "config";
import { ethers } from "ethers";

export const getNetwork = async () =>
  await new ethers.providers.Web3Provider(window.ethereum).getNetwork();

export const isSupportedNetworkConnected = async () =>
  (await getNetwork())?.chainId === CHAIN_ID;

export const isSupportedNetwork = (chainId: string) =>
  parseInt(chainId) === CHAIN_ID;

export const getWalletAddress = async () =>
  await new ethers.providers.Web3Provider(window.ethereum).send(
    "eth_accounts",
    []
  );

export const connectWallet = async () =>
  await new ethers.providers.Web3Provider(window.ethereum).send(
    "eth_requestAccounts",
    []
  );

//TODO: move to somewhere configurable to easily switch between multiple networks
export const switchNetwork = async () =>
  await new ethers.providers.Web3Provider(window.ethereum).send(
    "wallet_switchEthereumChain",
    [{ chainId: "0x1" }]
  );

export const listen = async (
  eventName: ethers.providers.EventType,
  listener: ethers.providers.Listener
) => window.ethereum?.on(eventName, listener);

export const unlisten = async (
  eventName: ethers.providers.EventType,
  listener: ethers.providers.Listener
) => window.ethereum?.removeListener(eventName, listener);
