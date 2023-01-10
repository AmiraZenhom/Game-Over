import React from "react";
import { Link } from "react-router-dom";
import photo from "../../image/logo.png";
import Styles from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary text-white  ${Styles.bg}`}
      >
        <div className="container">
          <Link className="navbar-brand p-2 mx-5" to="">
            <img className="w-25" src={photo} alt="" />
            <span className={`${Styles.logo_title}`}>Game Over</span>{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse mx-5 ${Styles.text}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="all">
                  All
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="platforms"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Platforms/pc">
                      Pc
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Platforms/browser">
                      {" "}
                      browser
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="story"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Story-by
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Story/releasedata">
                      release-data
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Story/popularity">
                      {" "}
                      popularity
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="categories"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Categories/racing">
                      racing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="categories/sport">
                      {" "}
                      sport
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Categories/social">
                      {" "}
                      social
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      shooter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      open-world
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      zombie
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      fantasy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      action-rpg
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      flight
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      battle-royale
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
