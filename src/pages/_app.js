import "@/styles/globals.css";
import React, { useState } from "react";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Head>
        <title> Barbershop</title>
      </Head>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
