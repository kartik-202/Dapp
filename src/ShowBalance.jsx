import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import './App.css'
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function ShowBalance(){
    const {connection}=useConnection();
    const wallet = useWallet();
    const [showBalance, setShowBalance] = useState();
    const publicKey=wallet.publicKey;
    useEffect(()=>{
    async function Balance() {
        if (publicKey && connection) {
            try {
              const balance = await connection.getBalance(publicKey);
              setShowBalance(balance / LAMPORTS_PER_SOL);  // Convert lamports to SOL
            } catch (error) {
              console.error("Error fetching balance:", error);
            }
          }
    }
    if(wallet.publicKey){
    Balance();
}
}, [wallet.publicKey, connection]);


    return(
        <>
        <h3>Sol Balance:{showBalance !== null ? showBalance : "Loading..."}</h3>
        </>
    )
}