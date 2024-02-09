import "@/styles/globals.css";
import { FirstContextProvider } from "@/components/context";
import { Header } from "@/components/Header";
import { FooterSec } from "@/components/Layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <FirstContextProvider>
      <Header></Header>
      <Component {...pageProps} />
      <FooterSec></FooterSec>
    </FirstContextProvider>
  );
}
