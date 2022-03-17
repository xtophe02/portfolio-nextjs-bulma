import Image from "next/image";
import { MarkedComponent } from "../../utils/marked";

import Layout from "../../components/layout";
import { getDataFiles, getData } from "../../utils/data-util";

export default function PostSlugPage({ post }) {
  return (
    <Layout imageUrl="/shiny.svg">
      <section className="section container">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="image is-5by4">
              <Image
                src={`/images/posts/${post.slug}/${post.image}`}
                layout="fill"
                alt={post.title}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </figure>
          </div>
          <div className="column">
            <div className="has-text-centered">
              <div className="title is-capitalized has-text-light">
                {post.title}
              </div>
              <div className="subtitle is-capitalized has-text-light">
                {post.excerpt}
              </div>
              <div className="level has-text-light">
                <p className="level-left">
                  [
                  {post.category.map((cat) => (
                    <span key={cat}>{cat}&nbsp;</span>
                  ))}
                  ]
                </p>
                <p className="level-right">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
        <MarkedComponent content={post.content} imageUrl={post.slug} />
      </section>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getDataFiles("posts").map((slug) => ({
    params: { slug },
  }));

  return {
    paths,

    fallback: "blocking", // See the "fallback" section below
  };
}
export async function getStaticProps(context) {
  const post = getData("posts", context.params.slug);

  return {
    props: { post }, // will be passed to the page component as props
  };
}
