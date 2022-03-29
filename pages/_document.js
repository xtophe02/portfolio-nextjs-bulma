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
      <body
        className="has-navbar-fixed-top"
        style={{ backgroundColor: "	#363636", height: "100vh" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
