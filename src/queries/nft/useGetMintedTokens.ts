import { NFT_CONTRACT_ADDRESS, mintingContractAbi } from "config";
import { useGetWalletDetails } from "queries";
import { useMultiCallContract } from "utils";

type Result = {
  isLoading: boolean;
  isError: boolean;
  data?: number[];
};

export const useGetMintedTokens = (): Result => {
  const { data: walletDetails } = useGetWalletDetails();

  const { data, isLoading, isError } = useMultiCallContract(
    "tokenIds",
    {
      address: NFT_CONTRACT_ADDRESS,
      method: "tokensOfOwner",
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      params: [walletDetails?.address!],
      abi: mintingContractAbi,
    },
    {
      enabled: Boolean(walletDetails?.address),
      select: (response) => (response !== "" ? response.split(",") : undefined),
    }
  );

  return { isLoading, isError, data };
};
