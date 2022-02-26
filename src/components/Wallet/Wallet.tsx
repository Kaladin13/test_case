import React, { FC, useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletConnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import PublicKey from '../PubKey/PublicKey';

const Wallet: FC = () => {

    const network = WalletAdapterNetwork.Devnet;

    const endpoint = clusterApiUrl(network);

    
    const wallets = [
        new PhantomWalletAdapter(),
        // add new wallets here
    ];
    
    

    const [connected, setConnected] = useState(false);

    useEffect(() => {
        console.log("aa");
    }, [connected]);

    const connect = () => {
        setConnected(!connected);
    }


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    <div>
                        <PublicKey setConnected={setConnected}/>
                        {!connected ? <WalletMultiButton onClick={connect}/> : <WalletDisconnectButton onClick={connect}/>}
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet;