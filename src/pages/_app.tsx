import { store } from "@/app/store";
import montserrat from "@/utils/motserrat";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
