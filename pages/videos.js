import Layout from "../components/layout";

import Image from "next/image";
import Link from "next/link";

export default function VideosPage() {
  // console.log(posts);
  return (
    <Layout>
      <section className="section hero container">
        <div className="hero-body">
          <p className="title  has-text-white">E-Learning</p>
          <p className="subtitle  has-text-light">
            &ldquo;code is more read than written&rdquo; <br />
          </p>
        </div>
        <div className="columns is-multiline "></div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
