import Layout from "../components/layout";
import { getAllData } from "../utils/data-util";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage({ posts = [] }) {
  // console.log(posts);
  return (
    <Layout>
      <section className="section hero container">
        <div className="hero-body">
          <p className="title  has-text-white">My Blog</p>
          <p className="subtitle  has-text-light">
            &ldquo;do your best even on little things&rdquo; <br />
          </p>
        </div>
        <div className="columns is-multiline ">
          {posts.map((post) => (
            <div
              className="column is-half is-one-third-widescreen"
              key={post.slug}
            >
              <div className="card">
                <div
                  className="card-content"
                  style={{
                    backgroundColor: "#bdd4e7",
                    backgroundImage:
                      "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)",
                  }}
                >
                  <figure className="image is-16by9">
                    <Image
                      src={`/images/posts/${post.slug}/${post.image}`}
                      alt={post.slug}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </figure>
                  <div className="title is-4 mt-2 is-capitalized">
                    {post.title}
                  </div>
                  <div className="subtitle is-7">
                    <div className="level">
                      <div className="level-left">{post.date}</div>
                      <div className="level-right">
                        [
                        {post.category.map((cat) => (
                          <span key={cat}>{cat}&nbsp;</span>
                        ))}
                        ]
                      </div>
                    </div>
                  </div>
                  <Link href={`/post/${post.slug}`}>
                    <a className="button is-fullwidth  is-outlined is-link has-text-weight-bold">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = getAllData("posts");

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
