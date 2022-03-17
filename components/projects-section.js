import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection({ projects }) {
  // console.log(projects);
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
        <p className="title has-text-white">Projects</p>
        <p className="subtitle has-text-light">
          My lastest projects. Click{" "}
          <Link href="/projects">
            <a>here</a>
          </Link>{" "}
          to see them all.
        </p>
      </div>
      <div className="columns is-multiline ">
        {projects.map((project) => (
          <div
            className="column is-half is-one-third-widescreen"
            key={project.slug}
          >
            <div className="card ">
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
                  backgroundColor: "#000000",
                  backgroundImage:
                    " linear-gradient(147deg, #000000 0%, #434343 74%)",
                }}
              >
                <div className="title is-4 mt-2 is-capitalized has-text-light">
                  {project.title}
                </div>
                <div className="subtitle is-7 has-text-light">
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
                  <Link href={`/projects/${project.slug}`}>
                    <a className="button is-link is-outlined">Read More</a>
                  </Link>

                  <a
                    className="button is-outlined is-primary"
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
  );
}
