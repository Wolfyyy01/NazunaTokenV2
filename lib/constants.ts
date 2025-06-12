import { getContract } from "thirdweb";
import client from "./client";
import { polygon } from "thirdweb/chains";
import logo from "../public/logo.png";




const base_url: string = "https://nazunatoken.xyz";
const image_url: string = `https://nazunatoken.xyz`;
const contract_address: string = "0x0469BbE0d678fE330C2689ad1c4B4d6b22218926";
const total_supply: string = "10,000,000"; // 10 million tokens

// social media URLs
const discord_url: string = "https://discord.com/invite/nzUU7dBE47";
const telegram_url: string = "https://t.me/nazunatoken";
const twitter_url: string = "https://x.com/@nazunatoken";

const tokenomicsData = [
  { label: "Liquidity Pool", percentage: 30, chartColor: "#9333ea", color: "from-purple-500 to-pink-500" },
  { label: "Pre-sale & Early Distribution", percentage: 20, chartColor: "#a855f7", color: "from-purple-500 to-pink-500" },
  { label: "Staking Rewards", percentage: 20, chartColor: "#c084fc", color: "from-purple-500 to-pink-500" },
  { label: "Team", percentage: 10, chartColor: "#d946ef", color: "from-purple-500 to-pink-500" },
  { label: "Community Airdrops & Rewards", percentage: 10, chartColor: "#ec4899", color: "from-purple-500 to-pink-500" },
  { label: "Marketing & Reserve", percentage: 10, chartColor: "#f472b6", color: "from-purple-500 to-pink-500" },
];

const contract = getContract({
  client,
  address: contract_address,
  chain: polygon,
});




export const constants = {
  base_url,
  image_url,
  contract_address,
  total_supply,
  tokenomicsData,
  contract,
  discord_url,
  telegram_url,
  twitter_url,
  logo,
};