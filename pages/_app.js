import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Image from "next/image";
import background from "./../public/background.jpeg";
import { useRouter } from 'next/router';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {router.asPath!=='/insights' && <>
        <Image src={background} alt="" className="backgroundimg" />
        <div className="filler-text">Create the Metaverse</div>
      </>}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
