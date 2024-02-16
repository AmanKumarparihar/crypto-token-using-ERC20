import abi from "./Transactions.json";
import { ethers } from "ethers";
export const contractAddress = "0x4501F1b2a8D465492dFFd3bc30E4F87F642DCD8b";
export const contractABI = abi.abi;

// Replace with your token contract address and ABI
// export const contractAddress = '0x4501F1b2a8D465492dFFd3bc30E4F87F642DCD8b';
// export const contractABI = abi.abi;

// const provider = new ethers.providers.JsonRpcProvider();
// const walletAddress = "00x0086387B944F8d47829a8b9755c502De9cE171A9";

// const tokenContract = new ethers.Contract(contractAddress, contractABI, provider);
// const tokenBalance = await tokenContract.balanceOf(walletAddress)
// console.log(`Your token balance: ${tokenBalance.toString()}`);
