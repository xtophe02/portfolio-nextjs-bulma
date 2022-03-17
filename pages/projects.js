import Layout from "../components/layout";
import { getAllData } from "../utils/data-util";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage({ projects = [] }) {
  // console.log(projects);
  return (
    <Layout>
      <section className="section hero container">
        <div className="hero-body">
          <p className="title  has-text-white">My Projects</p>
          <p className="subtitle  has-text-light">
            &ldquo;fulfill your word&rdquo; <br />
          </p>
        </div>
        <div className="columns is-multiline ">
          {projects.map((project) => (
            <div
              className="column is-half is-one-third-widescreen"
              key={project.slug}
            >
              <div className="card">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <Image
                      src={`/images/projects/${project.slug}/${project.image}`}
                      alt={project.slug}
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: "#b8c6db",
                    backgroundImage:
                      "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
                  }}
                >
                  <div className="title is-4 mt-2 is-capitalized">
                    {project.title}
                  </div>
                  <div className="subtitle is-7">
                    <div className="level">
                      <div className="level-left">{project.date}</div>
                      <div className="level-right">
                        [
                        {project.category.map((cat) => (
                          <span key={cat}>{cat}&nbsp;</span>
                        ))}
                        ]
                      </div>
                    </div>
                  </div>
                  <div className="buttons is-centered">
                    <Link href={`/project/${project.slug}`}>
                      <a className="button is-link is-outlined">Read More</a>
                    </Link>

                    <a
                      className="button is-outlined is-success"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Page
                    </a>

                    <a
                      className="button is-danger is-outlined"
                      href={project.git}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Code
                    </a>
                  </div>
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
  const projects = getAllData("projects");

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
