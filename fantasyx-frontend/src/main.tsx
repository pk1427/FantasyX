import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import {
  polygonMumbai,sepolia
} from "wagmi/chains";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// ✅ Get your free WalletConnect Project ID here: https://cloud.walletconnect.com/
const config = getDefaultConfig({
  appName: "FantasyX",
  projectId: "c363f538c949d640877f5736886cefea", // 🔁 Replace this
  chains: [polygonMumbai,sepolia],
  ssr: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} modalSize="compact">
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
