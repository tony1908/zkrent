import {
    ArrowLeftIcon,
    WalletIcon,
    DollarSignIcon,
    FileCheckIcon,
    PlayIcon,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Wallet = () => {
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <header className="flex items-center justify-between p-4">
                    <button className="text-gray-600">
                        <ArrowLeftIcon size={24}/>
                    </button>
                    <h1 className="text-lg font-semibold">Application Steps</h1>
                    <button className="text-gray-600"></button>
                </header>

            </div>
            <div className="p-6 flex justify-center">
                <div className="flex justify-center items-center">
                    <h1>Congrants! You just rented the home!</h1>
                </div>

            </div>
        </div>
    )
        ;
};

export default Wallet;
