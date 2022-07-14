import { type BigNumberish, ethers } from "ethers";
import { useMutation } from "react-query";

import { NFT_CONTRACT_ADDRESS, mintingContractAbi } from "config";
import Whitelist from "utils/Whitelist";

type Result = Promise<{ txHash: string; txReceipt: Promise<void> }>;
type WhitelistMintParams = {
  amount: number;
  userAddress: string;
  value: BigNumberish;
};

const whitelistMint = async (
  amount: number,
  userAddress: string,
  value: BigNumberish
): Result => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    NFT_CONTRACT_ADDRESS,
    mintingContractAbi,
    signer.connectUnchecked()
  );

  const merkleProof = Whitelist.getProofForAddress(userAddress);

  const tx = await contract.whitelistMint(amount, merkleProof, { value });

  const txHash = tx.hash;
  const txReceipt = tx.wait();

  return { txHash, txReceipt };
};

export const useWhitelistMint = () => {
  return useMutation(
    "whitelistMint",
    async ({ amount, userAddress, value }: WhitelistMintParams) =>
      whitelistMint(amount, userAddress, value)
  );
};
