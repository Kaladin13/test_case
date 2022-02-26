import React from "react";
import { FC, useEffect } from "react";
import { useWallet } from '@solana/wallet-adapter-react';


const PublicKey: FC<any> = (props: any) => {

    const { setConnected } = props;

    const wallet = useWallet();

    let provider;

    useEffect(() => {
        setConnected(wallet.connected);
        provider = window.solana;
    }, [wallet]);

    return (
        <div>
            {wallet.connected ? "Connected, " + wallet.publicKey : "Not connected"}
        </div>
    )
}

export default PublicKey;