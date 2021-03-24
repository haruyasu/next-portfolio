import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Haruyasu Kaitori</title>
        <meta name="description" content="ポートフォリオ" />
      </Head>
      <Hero />
    </Fragment>
  );
}
