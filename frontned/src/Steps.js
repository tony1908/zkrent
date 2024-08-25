import {
    ArrowLeftIcon,
    WalletIcon,
    DollarSignIcon,
    FileCheckIcon,
    PlayIcon,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";

const Steps = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <header className="flex items-center justify-between p-4">
                <button className="text-gray-600">
                    <ArrowLeftIcon size={24} />
                </button>
                <h1 className="text-lg font-semibold">Application Steps</h1>
                <button className="text-gray-600"></button>
            </header>

            <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Steps to Complete Your Application</h2>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="mr-4">
                            <WalletIcon size={28} className="text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">1. Create Account</h3>
                            <p className="text-gray-600 text-sm">
                                Securely connect your digital wallet to verify your identity and begin the application process.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="mr-4">
                            <DollarSignIcon size={28} className="text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">2. Connect Income</h3>
                            <p className="text-gray-600 text-sm">
                                Link your income sources for automatic verification of your financial status.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="mr-4">
                            <FileCheckIcon size={28} className="text-gray-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">3. Generate Proof</h3>
                            <p className="text-gray-600 text-sm">
                                Automatically generate zk proof of income and identity for the application.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="w-full bg-green-600 text-white py-3 rounded-full flex items-center justify-center font-semibold hover:bg-green-700 transition duration-300" onClick={() => {
                        window.location.replace('/wallet')
                    }}>
                        <PlayIcon size={20} className="mr-2" />
                        Start Application
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Steps;
