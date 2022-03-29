import { useState } from "react";
import { MarkedComponent } from "../utils/marked";
import ReactCardFlip from "react-card-flip";

import { FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import { FaCogs } from "react-icons/fa";
import { iconLibrary } from "../utils/icon-library";

const details = {
  databases: {
    icon: <FaDatabase size="16rem" />,
    style: {
      backgroundColor: "#bf3a30",
      // backgroundImage: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
  html5_css3: {
    icon: <FaCode size="16rem" />,
    style: {
      backgroundColor: "#b3cdd1",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
  server_environment: {
    icon: <FaServer size="16rem" />,
    style: {
      backgroundColor: "#63d471",
      // backgroundImage: "linear-gradient(315deg, #63d471 0%, #233329 74%)",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
  hosting_platforms: {
    icon: <AiOutlineCloudServer size="16rem" />,
    style: {
      backgroundColor: "#5de6de",
      // backgroundImage: "linear-gradient(315deg, #5de6de 0%, #b58ecc 74%)",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
  javascript: {
    icon: <VscServerProcess size="16rem" />,
    style: {
      backgroundColor: "#f5d020",
      // backgroundImage: "linear-gradient(315deg, #f5d020 0%, #f53803 74%)",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
  orchestration_platforms: {
    icon: <FaCogs size="16rem" />,
    style: {
      backgroundColor: "#f9ea8f",
      // backgroundImage: "linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)",
      backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
    },
  },
};

export default function SkillCard({ skill }) {
  const [show, setShow] = useState(false);

  return (
    <ReactCardFlip isFlipped={show} flipDirection="horizontal">
      <div
        className="card "
        onMouseEnter={() => setShow(true)}
        onClick={() => setShow(true)}
        style={details[skill.slug].style}
      >
        <header className="card-header">
          <p className={`card-header-title is-size-4 has-text-${skill.color}`}>
            {skill.title}
          </p>
        </header>
        <div className="card-content box">
          <div className={`has-text-centered has-text-${skill.color}`}>
            {details[skill.slug].icon}
          </div>
        </div>
      </div>

      <div
        className="card "
        style={details[skill.slug].style}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(false)}
      >
        <div className="card-content">
          <div className="columns is-gapless">
            <div className="column is-three-quarters">
              <MarkedComponent
                content={skill.content}
                className={` has-text-${skill.color}`}
              />
            </div>
            <div className="is-hidden-desktop-only">
              <div className="pt-3"></div>
            </div>
            <div className="column">
              <ul>
                {skill.library.map((ic) => (
                  <a
                    href={ic.url}
                    key={ic.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {iconLibrary(ic.icon, ic.color)}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
