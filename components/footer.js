import Link from "next/link";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-primary has-text-centered">
        <div>
          <SocialMedia />
        </div>
        Christophe Moreira &copy;
        {new Date().getFullYear()}
        <br />
        <Link href="/contact">
          <a className="icon-text">
            <span className="icon">
              <BsChatDots />
            </span>
            <span>get in touch with me</span>
          </a>
        </Link>
      </div>
    </footer>
  );
}
