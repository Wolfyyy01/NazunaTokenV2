"use client"

import { useEffect, useState } from "react"
import { Wallet, Plus, Minus, Shield, CheckCircle } from "lucide-react"
import { useActiveAccount, useSendTransaction } from "thirdweb/react"
import Notification from "../Nottification"
import axios from "axios"
import { getContract, prepareContractCall, prepareTransaction, sendTransaction, toWei } from "thirdweb"
import client from "@/lib/client"
import viemClient from "@/lib/viemClient"
import { polygon, sepolia } from "thirdweb/chains"
import { getTransactionReceipt, waitForTransactionReceipt } from 'viem/actions';


export default function PresalePurchase() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [POLAmount, setPOLAmount] = useState("1")
  const [bonusPercentage, setBonusPercentage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showNotif, setShowNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState('');
  const [notifType, setNotifType] = useState<"success" | "error" | "info">("success");


  const account = useActiveAccount();
  const { mutate: sendTx, data: transactionResult } =
    useSendTransaction();

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      setWalletAddress(account?.address ?? "");
      setIsConnected(true);
    } catch (err) {
      alert("Wallet connection error");
    }
    setIsLoading(false);
  }


  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  const adjustAmount = (increment: boolean) => {
    const current = Number.parseFloat(POLAmount || "0")
    const newAmount = increment ? current + 0.1 : Math.max(0.1, current - 0.1)
    setPOLAmount(newAmount.toFixed(0.0001))
  }

  const presaleTiers = [
    { min: 0.0001, max: 500, bonus: 0, label: "Tier 1" },
    { min: 500, max: 5000, bonus: 10, label: "Tier 2" },
    { min: 5000, max: 9000, bonus: 20, label: "Tier 3" },
    { min: 9000, max: 23000, bonus: 35, label: "Tier 4" },
    { min: 23000, max: Number.POSITIVE_INFINITY, bonus: 50, label: "Tier 5" },
  ]

  const currentTier =
    presaleTiers.find(
      (tier) => Number.parseFloat(POLAmount || "0") >= tier.min && Number.parseFloat(POLAmount || "0") < tier.max,
    ) || presaleTiers[0]

  useEffect(() => {
    setBonusPercentage(currentTier.bonus);
  }, [currentTier]);

  const startDate = new Date("2025-06-13"); 
  const phaseLength = 15; 

  const dynamicTimeline = [
    { phase: "Phase 1", price: 0.05 },
    { phase: "Phase 2", price: 0.1 },
    { phase: "Phase 3", price: 0.2 },
    { phase: "Phase 4", price: 0.3 },
  ].map((entry, index) => {
    const now = new Date();
    const phaseStart = new Date(startDate);
    phaseStart.setDate(startDate.getDate() + index * phaseLength);
    const phaseEnd = new Date(phaseStart);
    phaseEnd.setDate(phaseStart.getDate() + phaseLength);

    let status: "completed" | "active" | "upcoming" = "upcoming";
    if (now >= phaseEnd) status = "completed";
    else if (now >= phaseStart) status = "active";

    return {
      ...entry,
      status,
    };
  });
  const currentPhase = dynamicTimeline.find(p => p.status === "active") ?? dynamicTimeline[0];




  const tokenPrice = currentPhase.price;
  const POLAmount2 = Number.parseFloat(POLAmount || "0");
  const tokensPerPOL = POLAmount2 / tokenPrice;
  const bonusTokens = (tokensPerPOL * bonusPercentage) / 100;
  const totalTokens = tokensPerPOL + bonusTokens;


  const purchaseTokens = async () => {
    const contract = await getContract({
      client,
      chain: polygon,
      address: '0x0000000000000000000000000000000000001010'
    })
    const amountNumber = POLAmount;
    const amountWei = toWei(amountNumber.toString());
    if (!isConnected || Number(amountNumber) < 0.0001) return;

    const tokensForUser = Math.floor(totalTokens);
    setIsLoading(true);

    try {
      const transaction = prepareTransaction({
        to: '0xE23Ef3c448e16e43e2E6925F9321853585F8bcEB',
        value: amountWei,
        chain: sepolia,
        client
      })
      if (!account) {
        throw new Error("Wallet account not found.");
      }
      const result = await sendTransaction({
        transaction,
        account,
      })


      setNotifMessage(`Transaction sent!\n ${result.transactionHash} Waiting for confirmation...`);
      setNotifType("info");
      setShowNotif(true);
      const transactionReceipt = await waitForTransactionReceipt(viemClient, {
        hash: result.transactionHash,
        confirmations: 2,
      });



      if (transactionReceipt.status !== "success") {
        setNotifMessage("Transaction failed. Please try again.");
        setNotifType("error");
        setShowNotif(true);
        return;
      }

      setNotifMessage("Transaction confirmed! " + transactionReceipt.transactionHash);
      setNotifType("success");
      setShowNotif(true);

      console.log(totalTokens, tokensForUser, amountNumber, walletAddress);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/presale-stats/buy`, {
        wallet: walletAddress,
        amount: Number.parseFloat(amountNumber || "0"),
        tokens: totalTokens
      });

      setNotifMessage(`Successfully purchased ${tokensForUser} NZNA tokens!`);
      setNotifType("success");
      setShowNotif(true);
    } catch (err) {
      console.error(err);
      const errorMessage = (err instanceof Error) ? err.message : "";

      if (errorMessage.includes("insufficient funds for gas")) {
        setNotifMessage("Insufficient funds to complete the transaction. Please check your POL balance.");
      } else {
        setNotifMessage("Purchase failed. Please try again.");
      }

      setNotifType("error");
      setShowNotif(true);
    }
    finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {showNotif && (
        <Notification
          message={notifMessage}
          type={notifType}
          onClose={() => setShowNotif(false)}
        />
      )}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Purchase NZNA Tokens</span>
            </h2>
            <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
              Connect your wallet and join the presale with exclusive bonuses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Purchase Form */}
            <div className="token-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Buy NZNA Tokens</h3>

              {/* Wallet Connection */}
              {!isConnected ? (
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full mb-6 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Wallet className="h-5 w-5 mr-2" />
                  )}
                  {isLoading ? "Connecting..." : "Connect Wallet"}
                </button>
              ) : (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-400 font-medium">Wallet Connected</span>
                    </div>
                    <button
                      onClick={disconnectWallet}
                      className="text-purple-300 hover:text-white transition-colors text-sm"
                    >
                      Disconnect
                    </button>
                  </div>
                  <p className="text-green-300 text-sm mt-1">{walletAddress}</p>
                </div>
              )}

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-purple-300 dark:text-purple-300 light:text-gray-700 font-medium mb-2">
                  POL Amount
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => adjustAmount(false)}
                    className="p-2 bg-purple-800/50 hover:bg-purple-700/50 rounded-lg transition-colors"
                  >
                    <Minus className="h-4 w-4 text-white" />
                  </button>
                  <input
                    type="number"
                    value={POLAmount}
                    onChange={(e) => setPOLAmount(e.target.value)}
                    min="0.0001"
                    step="0.0001"
                    className="flex-1 px-4 py-3 bg-purple-900/30 dark:bg-purple-900/30 light:bg-purple-100/50 border border-purple-800/30 dark:border-purple-800/30 light:border-purple-200/50 rounded-lg text-white dark:text-white light:text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => adjustAmount(true)}
                    className="p-2 bg-purple-800/50 hover:bg-purple-700/50 rounded-lg transition-colors"
                  >
                    <Plus className="h-4 w-4 text-white" />
                  </button>
                </div>
                <p className="text-sm text-purple-400">= {POLAmount.toLocaleString()} POL</p>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {["500", "5000", "9000", "23000"].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setPOLAmount(amount)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${POLAmount === amount
                      ? "bg-purple-600 text-white"
                      : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                      }`}
                  >
                    {amount} POL
                  </button>
                ))}
              </div>

              {/* Purchase Summary */}
              <div className="mb-6 p-4 bg-purple-900/20 dark:bg-purple-900/20 light:bg-purple-100/30 rounded-xl">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-purple-300 dark:text-purple-300 light:text-gray-600">Base Tokens:</span>
                    <span className="text-white dark:text-white light:text-gray-800 font-medium">
                      {tokensPerPOL.toLocaleString()} NZNA
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-300 dark:text-purple-300 light:text-gray-600">
                      Bonus ({bonusPercentage}%):
                    </span>
                    <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 font-medium">
                      +{bonusTokens.toLocaleString()} NZNA
                    </span>
                  </div>
                  <div className="border-t border-purple-800/30 pt-2">
                    <div className="flex justify-between">
                      <span className="text-purple-300 dark:text-purple-300 light:text-gray-600 font-medium">Total:</span>
                      <span className="text-white dark:text-white light:text-gray-800 font-bold">
                        {totalTokens.toLocaleString()} NZNA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              <button
                onClick={purchaseTokens}
                disabled={!isConnected || isLoading || Number.parseFloat(POLAmount || "0") < 0.0001}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  `Purchase ${totalTokens.toLocaleString()} NZNA`
                )}
              </button>
            </div>

            {/* Bonus Tiers */}
            <div className="token-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6">Bonus Tiers</h3>

              <div className="space-y-4">
                {presaleTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all ${currentTier === tier ? "border-pink-500/50 bg-pink-900/20" : "border-purple-800/30 bg-purple-900/10"
                      }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white dark:text-white light:text-gray-800">{tier.label}</span>
                      <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 font-bold">
                        +{tier.bonus}%
                      </span>
                    </div>
                    <p className="text-sm text-purple-300 dark:text-purple-300 light:text-gray-600">
                      {tier.min} - {tier.max === Number.POSITIVE_INFINITY ? "∞" : tier.max} POL
                    </p>
                    {currentTier === tier && (
                      <div className="mt-2 flex items-center text-sm text-pink-400">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Current tier
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-blue-400 font-medium mb-1">Security Notice</h4>
                    <p className="text-sm text-blue-300">
                      Your tokens will be claimed by you after the presale ends. All
                      transactions are secured by smart contracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
