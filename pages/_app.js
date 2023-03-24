import LogNav from "@/Components/LogNav";
import Channel from "@/Components/Channel";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <LogNav />
      <Channel />
    </>
  );
}
