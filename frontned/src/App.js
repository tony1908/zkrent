
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { polygonAmoy, zkSyncSepoliaTestnet } from "viem/chains";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Home from "./Home";
import Identity from "./Identity";
import Detail from "./Detail";
import Steps from "./Steps";
import Wallet from "./Wallet";
import Income from "./Income";
import Proof from "./Proof";
import Finish from "./finish";
import About from "./About"; // Assuming you have an About component

const config = createConfig({
    chains: [polygonAmoy, zkSyncSepoliaTestnet],
    multiInjectedProviderDiscovery: false,
    transports: {
        [polygonAmoy.id]: http(),
    },
});

const queryClient = new QueryClient();

export default function App() {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "",
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <DynamicWagmiConnector>
                        <Router>
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/identity" element={<Identity />} />
                                <Route path="/detail" element={<Detail />} />
                                <Route path="/steps" element={<Steps />} />
                                <Route path="/wallet" element={<Wallet />} />
                                <Route path="/income" element={<Income />} />
                                <Route path="/proof" element={<Proof />} />
                                <Route path="/finish" element={<Finish />} />
                                {/*<Route path="/rent" element={<Rent />} />*/}
                            </Routes>
                        </Router>
                    </DynamicWagmiConnector>
                </QueryClientProvider>
            </WagmiProvider>
        </DynamicContextProvider>
    );
}
