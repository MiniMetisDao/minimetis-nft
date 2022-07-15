import { NFT_CONTRACT_ADDRESS, mintingContractAbi } from "config";
import { useGetWalletDetails } from "queries";
import { useMultiCallContract } from "utils";

type Result = {
  isLoading: boolean;
  isError: boolean;
  data?: { whitelistClaimed: boolean };
};

export const useGetWhitelistStatus = (): Result => {
  const { data: walletDetails } = useGetWalletDetails();

  const { data, isLoading, isError } = useMultiCallContract(
    "whitelistStatus",
    [
      {
        address: NFT_CONTRACT_ADDRESS,
        method: "whitelistClaimed",
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
        params: [walletDetails?.address!],
        abi: mintingContractAbi,
      },
    ],
    { enabled: Boolean(walletDetails?.address) }
  );

  const parseData = data?.[0]
    ? data[0] === "true"
      ? { whitelistClaimed: true }
      : { whitelistClaimed: false }
    : undefined;

  return { isLoading, isError, data: parseData };
};
