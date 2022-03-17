import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
          rel="stylesheet"
        /> */}
      </Head>
      <body className="has-navbar-fixed-top" style={{ fontFamily: "Ubuntu" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
