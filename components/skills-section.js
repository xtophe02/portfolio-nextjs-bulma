import SkillCard from "./skill-card";

export default function SkillsSection({ skills }) {
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
        <p className="title has-text-white">Expertises</p>
        <p className="subtitle has-text-light">
          Skills acquired over the years
        </p>
      </div>
      <div className="columns is-multiline ">
        {skills.map((skill) => (
          <div
            className="column is-half is-one-third-widescreen"
            key={skill.slug}
            style={{ order: skill.order }}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
