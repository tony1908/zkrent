import React from "react";
import {
    ArrowLeftIcon,
    WalletIcon,
    DollarSignIcon,
    FileCheckIcon,
    PlayIcon,
} from "lucide-react";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

const Rent = () => {
    const { config } = usePrepareContractWrite({
        abi: [
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: '_id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: '_proof',
                        type: 'string',
                    },
                ],
                name: 'rentProperty',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ],
        address: '0x1965a64fA8cC8Fea9189B082b917F7E719cB4788', // Replace with your contract address
        functionName: 'rentProperty',
        args: [1, 'your_proof_string_here'], // Replace with your actual property ID and proof
    });

    const { data, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <header className="flex items-center justify-between p-4">
                    <button className="text-gray-600">
                        <ArrowLeftIcon size={24} />
                    </button>
                    <h1 className="text-lg font-semibold">Application Steps</h1>
                    <button className="text-gray-600"></button>
                </header>
            </div>
            <div className="p-6 flex justify-center">
                <div className="flex justify-center items-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={!write || isLoading}
                        onClick={() => write && write()}
                    >
                        {isLoading ? 'Renting...' : 'Rent Property'}
                    </button>
                </div>
            </div>
            {isSuccess && (
                <div className="mt-4 text-center">
                    Successfully rented the property!
                    <div>
                        <a href={`https://etherscan.io/tx/${data?.hash}`} target="_blank" rel="noopener noreferrer">
                            View on Etherscan
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rent;
