import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";

const NavbarLink = ({ children, href }) => (
  <Link href={href}>
    <a className="navbar-item">{children}</a>
  </Link>
);

export default function Navbar() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavbarLink href="/">
            {/* <figure className="image is-64x64">
              <Image src="/logo.png" layout="fill" />
            </figure> */}

            <h1 className="icon-text has-text-white is-size-3">
              <span className="icon has-text-primary">
                <FaCogs />
              </span>
              <span>CM</span>
            </h1>
          </NavbarLink>

          <a
            role="button"
            className={`navbar-burger ${show && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setShow(!show)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${show && "is-active"}`}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end ">
            {router.pathname === "/videos" && (
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign in</strong>
                  </a>
                </div>
              </div>
            )}

            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/blog">Blog</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/videos">Videos</NavbarLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <NavbarLink href="/about">About</NavbarLink>
                {/* <a className="navbar-item">Jobs</a> */}
                <NavbarLink href="/contact">Contact</NavbarLink>
                {/* <hr className="navbar-divider" /> */}
                {/* <a className="navbar-item">Report an issue</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
