import Link from "next/link";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import styles from "../styles/SocialMedia.module.css";

export default function SocialMedia() {
  const NavLinks = ({ href, children, className }) => (
    <Link href={href}>
      <a target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    </Link>
  );
  return (
    <div>
      <NavLinks
        href="https://www.facebook.com/christophe.moreira.165"
        className="has-text-link"
      >
        <FaFacebookSquare size={36} className={styles.grow} />
      </NavLinks>
      <NavLinks
        href="https://www.linkedin.com/in/christophe-moreira-15aa7551/"
        className="has-text-info"
      >
        <FaLinkedin size={36} className={styles.grow} />
      </NavLinks>
      <NavLinks
        href="https://www.instagram.com/xtophe02/"
        className="has-text-danger"
      >
        <FaInstagramSquare size={36} className={styles.grow} />
      </NavLinks>
      <NavLinks href="https://twitter.com/xtophe02" className="has-text-info">
        <FaTwitterSquare size={36} className={styles.grow} />
      </NavLinks>
      <NavLinks href="https://github.com/xtophe02" className="has-text-white">
        <FaGithubSquare size={36} className={styles.grow} />
      </NavLinks>
    </div>
  );
}
