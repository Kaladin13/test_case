import React from "react";
import { FC } from "react";
import { useWallet } from '@solana/wallet-adapter-react';

const PublicKey: FC = () => {

    const wallet = useWallet();

    return (
        <div>
            {wallet.connected ? "Connected, " + wallet.publicKey : "Not connected"}
        </div>
    )
}

export default PublicKey;