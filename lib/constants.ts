
import { getContract } from "thirdweb";
import client from "./client";
import { polygon } from "thirdweb/chains";
import logo from "../public/logo.png";




const base_url: string = "https://www.nazunatoken.xyz";
const image_url: string = `https://www.nazunatoken.xyz`;
const contract_address: string = "0x5D2A7217E9b248cA734501Ba28AA864015925e1b";
const staking_contract_address = "0xBA19776EbC774DBC9eDCCa5EC0FE89b2a7A61F74";  // Polygon address, update for Sepolia if needed
const box_contract_address = "0xB51CF2b8EB5BE927B36d45ec8F81D99d3623e920";  // Sepolia address, update for Polygon if needed
const total_supply: string = "10,000,000"; // 10 million tokens

// social media URLs
const discord_url: string = "https://discord.com/invite/nzUU7dBE47";
const telegram_url: string = "https://t.me/nazunatoken";
const twitter_url: string = "https://x.com/@nazunatoken";
const email: string = 'wolfyyyyy01@gmail.com'

const tokenomicsData = [
  { label: "Liquidity Pool (LP)", percentage: 40, chartColor: "#9333ea", color: "from-purple-500 to-pink-500" },
  { label: "Marketing & Partners", percentage: 20, chartColor: "#a855f7", color: "from-purple-500 to-pink-500" },
  { label: "Team (Dev)", percentage: 15, chartColor: "#c084fc", color: "from-purple-500 to-pink-500" },
  { label: "Community & Rewards", percentage: 15, chartColor: "#d946ef", color: "from-purple-500 to-pink-500" },
  { label: "Airdrop Genesis", percentage: 10, chartColor: "#ec4899", color: "from-purple-500 to-pink-500" },
];

const activeChain = polygon;

const contract = getContract({
  client,
  address: contract_address,
  chain: activeChain,
});



const stakingContract = getContract({
  client,
  address: staking_contract_address,
  chain: activeChain,
});


export const constants = {
  base_url,
  image_url,
  contract_address,
  staking_contract_address,
  total_supply,
  tokenomicsData,
  contract,
  stakingContract,
  box_contract_address,
  discord_url,  
  telegram_url,
  twitter_url,
  logo,
  email,
  activeChain,
};