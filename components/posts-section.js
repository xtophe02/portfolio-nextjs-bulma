import Link from "next/link";
import Image from "next/image";

export default function PostsSection({ posts }) {
  // console.log(posts);
  return (
    <section
      className="section is-medium"
      // style={{
      //   background: "url(polygon.svg) no-repeat center center fixed",
      //   // backgroundPosition: "fixed",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="hero-body ">
        <p className="title has-text-white">Posts</p>
        <p className="subtitle has-text-light">
          My lastest posts. Click{" "}
          <Link href="/posts">
            <a>here</a>
          </Link>{" "}
          to see them all.
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
                  backgroundColor: "#20bf55",
                  backgroundImage:
                    "linear-gradient(315deg, #20bf55 0%, #01baef 74%)",
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
                <Link href={`/posts/${post.slug}`}>
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
  );
}
