import client from "@/lib/client";
import React from "react";
import {
  ConnectButton,
  darkTheme,
  useActiveAccount,
  useWalletBalance,
  useWalletDetailsModal,
} from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { polygon } from "thirdweb/chains";
import { constants } from "@/lib/constants";

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "discord", "telegram", "x", "email", "passkey"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
];

export const ConnectWallet = () => {
  const account = useActiveAccount();

  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain: constants.activeChain,
    address: account?.address,
    tokenAddress: constants.contract_address,
  });

  const detailsModal = useWalletDetailsModal();

  function handleClick() {
    detailsModal.open({
      client,
      theme: "dark",
      chains: [constants.activeChain],
      supportedTokens: {
        [constants.activeChain.id]: [
          {
            address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC contract address (Sepolia if needed)
            name: "USD Coin",
            symbol: "USDC",
            icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
          },
          {
            address: constants.contract_address, // NZNA contract address
            name: "Nazuna Token",
            symbol: "NZNA",
            icon:
              typeof constants.logo === "string"
                ? constants.logo
                : (constants.logo.src ?? ""),
          },
        ],
      },
      displayBalanceToken: {
        [constants.activeChain.id]: constants.contract_address,
      },
      showBalanceInFiat: "EUR",
    });
  }

  if (account) {
    const [integerPart, decimalPart] = (balance?.displayValue || "0").split(
      ".",
    );
    const formattedValue = decimalPart
      ? `${integerPart}.${decimalPart.substring(0, 2)}`
      : integerPart;

    return (
      <div className="">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost"
          onClick={handleClick}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-xs text-purple-500"></span>
          ) : (
            <>
              {formattedValue} {balance?.symbol || "NZNA"}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          modalBg: "hsl(259, 44%, 7%)",
          borderColor: "hsl(229, 13%, 17%)",
          accentText: "hsl(270, 95%, 75%)",
          accentButtonBg: "hsl(270, 95%, 75%)",
          accentButtonText: "hsl(0, 0%, 0%)",
          primaryButtonBg: "linear-gradient(to right, #9333ea, #ec4899)",
        },
      })}
      connectButton={{ label: "Connect Wallet" }}
      connectModal={{
        size: "wide",
        title: "Connect Wallet",
        showThirdwebBranding: false,
        termsOfServiceUrl: constants.base_url + "/tos",
        privacyPolicyUrl: constants.base_url + "/privacy",
      }}
    />
  );
};
