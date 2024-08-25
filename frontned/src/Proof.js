import {
    ArrowLeftIcon,
    WalletIcon,
    DollarSignIcon,
    FileCheckIcon,
    PlayIcon,
} from "lucide-react";
import { render } from "react-dom";
import React, { useState } from "react";
import {initialize} from "zokrates-js";

// Function to call the /income API
const fetchProofData = async () => {
    const response = await fetch('/income');
    if (!response.ok) {
        throw new Error('Failed to fetch income data');
    }
    const data = await response.json();
    return { x: data.x, y: data.y }; // Assuming the API returns an object with `x` and `y`
};

const Proof = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateProof = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchProofData();

            initialize().then((zokratesProvider) => {
                const source = `
                    def main(field x, field y) -> bool {
                      field diff = x - y;
                      bool is_greater = diff > 0;
                      assert(diff > 0);
                      return is_greater;
                    }
                  `;

                const artifacts = zokratesProvider.compile(source);
                const { witness, output } = zokratesProvider.computeWitness(artifacts, [data.x, data.y]);
                const keypair = zokratesProvider.setup(artifacts.program);
                const proof = zokratesProvider.generateProof(artifacts.program, witness, keypair.pk);

                const isVerified = zokratesProvider.verify(keypair.vk, proof);
                setResult({ output, proof, isVerified });
                setLoading(false);
            });
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

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
            <div className="p-6 items-center justify-between">
                <button
                    onClick={generateProof}
                    className="bg-blue-500 text-white py-2 px-4 rounded items-center justify-between"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Proof"}
                </button>
            </div>

            {error && (
                <div className="p-6 text-red-600">
                    <p>Error: {error}</p>
                </div>
            )}

            {result && (
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Proof Generated</h2>
                    <div className="bg-gray-100 p-4 rounded">
                        <pre className="text-sm overflow-x-auto">
                            <strong>Proof:</strong> {JSON.stringify(result.proof, null, 2)}
                        </pre>
                        <pre className="text-sm overflow-x-auto">
                            <strong>Output:</strong> {result.output}
                        </pre>
                        <p className="text-sm">
                            <strong>Verification Status:</strong> {result.isVerified ? 'Verified' : 'Not Verified'}
                        </p>
                    </div>

                    <button
                        className="w-full bg-green-600 text-white py-3 rounded-full flex items-center justify-center font-semibold hover:bg-green-700 transition duration-300"
                        onClick={() => {
                            window.location.replace('/finish')
                        }}>
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default Proof;
