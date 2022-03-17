import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({
  children,
  title,
  keywords,
  description,
  imageUrl = "/polygon.svg",
}) {
  return (
    <>
      <Head>
        <title>{title} | Chris Space</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="author" content="Christophe Moreira" />
        {/* <link rel='icon' href='/favicon.icon' /> */}
      </Head>
      <main
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          // className="container"
          style={{
            background: `url('${imageUrl}') no-repeat center center fixed`,
            // backgroundPosition: "fixed",
            backgroundSize: "cover",
            // height: "100vh",
            // zIndex: -2,

            flexGrow: "1",
          }}
        >
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: "Welcome",
  keywords: "development, coding, programing, tutorial",
  description: "Christophe Personal blog",
};
