import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/Apollo-client";
import { store, persistor } from "../Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NextNProgress color="#21FA90" />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </SessionProvider>
  );
}
