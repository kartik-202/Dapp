import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Airdrop from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import ShowBalance from './ShowBalance';


function App() {


  return (
    < div className="buttons">
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          
            <WalletMultiButton className='connect-button'/>
            <WalletDisconnectButton className='disconnect-button'/>
               
               <Airdrop></Airdrop>
               <ShowBalance></ShowBalance>
    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
  )
}

export default App
