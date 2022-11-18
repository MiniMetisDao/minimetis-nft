import { type BigNumberish, ethers } from "ethers";
import { useMutation } from "react-query";

import { NFT_CONTRACT_ADDRESS, mintingContractAbi } from "config";

type Result = Promise<{ txHash: string; txReceipt: Promise<void> }>;
type PublicMintParams = {
  amount: number;
  value: BigNumberish;
};

const publicMint = async (amount: number, value: BigNumberish): Result => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    NFT_CONTRACT_ADDRESS,
    mintingContractAbi,
    signer.connectUnchecked()
  );

  const tx = await contract.mint(amount, { value });

  const txHash = tx.hash;
  const txReceipt = tx.wait();

  return { txHash, txReceipt };
};

export const usePublicMint = () => {
  return useMutation(
    "publicMint",
    async ({ amount, value }: PublicMintParams) => publicMint(amount, value)
  );
};
