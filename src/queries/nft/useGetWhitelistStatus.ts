import { UseQueryResult } from "react-query";

import { NFT_CONTRACT_ADDRESS, mintingContractAbi } from "config";
import { useMultiCallContract } from "utils";

const methods = [
  "name",
  "cost",
  "merkleRoot",
  "whitelistMintEnabled",
  "totalSupply",
  "maxSupply",
  "maxMintAmountPerTx",
  "paused",
  "revealed",
] as const;

type Methods = typeof methods[number];

type ResultSet = Record<Methods, any>;

const query = methods.map((method) => ({
  method,
  address: NFT_CONTRACT_ADDRESS,
  abi: mintingContractAbi,
}));

const selector = (results: string[]): ResultSet => {
  const res: Partial<ResultSet> = {};

  results.forEach((result, idx) => {
    res[methods[idx]] = result;
  });

  return res as ResultSet;
};

export const useGetNftDetails = (): UseQueryResult<ResultSet, any> => {
  return useMultiCallContract("getNftDetails", query, {
    // refetchOnWindowFocus: true, do we need it?
    staleTime: Infinity,
    select: selector,
  });
};
