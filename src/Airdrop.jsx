import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import './App.css'
import { useState } from "react";

export default function Airdrop(){
  const [amount,setamount]=useState();
  const wallet=useWallet();
  const {connection}=useConnection();
    async function sendAirdrop(){
      try {
        const lamports=parseFloat(amount)*10000000;
        if (isNaN(lamports) || lamports <= 0) {
          alert("Please enter a valid amount");
          return;
        }
      await connection.requestAirdrop(wallet.publicKey,lamports);
      alert(`solana sent to devnet account`);
    } catch (error) {
        console.log(error);
        alert(`sol not tranferred`)
    }
    }
    return (
      <div className="amount">
        <input type="text" placeholder="Amount in Sol" onChange={(e)=>setamount(e.target.value)}/>
        <button onClick={sendAirdrop}>Send Solana</button>
      </div>
    )
  }

