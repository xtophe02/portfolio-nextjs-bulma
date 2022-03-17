import { BsBootstrapFill } from "react-icons/bs";
import {
  SiBulma,
  SiTailwindcss,
  SiApollographql,
  SiNextdotjs,
  SiGatsby,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiJamstack,
  SiContentful,
  SiStrapi,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAirtable,
  SiMaterialui,
  SiSemanticuireact,
  SiVuedotjs,
  SiNetlify,
  SiGoogle,
  SiDigitalocean,
  SiHeroku,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiSupabase,
  SiVercel,
  SiGo,
  SiLinode,
} from "react-icons/si";
import { DiMaterializecss, DiReact, DiNodejsSmall } from "react-icons/di";

export const iconLibrary = (icon, color) => {
  switch (icon) {
    case "bootstrap":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <BsBootstrapFill />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "bulma":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiBulma />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "tailwindcss":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiTailwindcss />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "materializecss":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <DiMaterializecss />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "react":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <DiReact />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "redux":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiRedux />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "apollo":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiApollographql />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "nextjs":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiNextdotjs />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "gatsby":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiGatsby />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "mui":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiMaterialui />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "semanticui":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiSemanticuireact />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "typescript":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiTypescript />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "vue":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiVuedotjs />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "nodejs":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <DiNodejsSmall />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "expressjs":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiExpress />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "graphql":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiGraphql />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "jamstack":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiJamstack />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "contentful":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiContentful />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "strapi":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiStrapi />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "firebase":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiFirebase />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "airtable":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiAirtable />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "mongodb":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiMongodb />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "mongoose":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiMongodb />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "postgresql":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiPostgresql />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "prisma":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiPrisma />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "netlify":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiNetlify />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "google":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiGoogle />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "digitalocean":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiDigitalocean />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "heroku":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiHeroku />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "github":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiGithub />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "docker":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiDocker />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "kubernetes":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiKubernetes />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "supabase":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiSupabase />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "vercel":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiVercel />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "go":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiGo />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    case "linode":
      return (
        <small className={`icon-text has-text-${color}`}>
          <span className="icon">
            <SiLinode />
          </span>
          <span className="is-capitalized">{icon}</span>
        </small>
      );
    default:
      return;
  }
};
