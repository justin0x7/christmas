import React from "react";
import profile from "../../assets/daniel.png";
import "./github.css";

function Github() {
  return (
    <div className="github" id="github">
      <div className="github-header">
        <div className="github-header-title">
          <h1>Happy Man</h1>
        </div>
        <div className="github-bar-container">
          <div className="github-bar"></div>
        </div>
      </div>
      <div className="github-content section-padding">
        <div className="github-content-pic">
          <img src={profile} alt="github-icon-gradient" />
        </div>

        <div className="github-content-links">
          <h3 className="gradient-text">Good friend</h3>
          <p>
            Happy Day To Your Family
          </p>
          {/* <div className="github-content-insta">
            <FaInstagram size={25} />
            <p>
              <a href="https://www.instagram.com/unk.iman.dev/">
                Follow me on Instagram
              </a>
            </p>
          </div> */}
          {/* <div className="github-content-insta">
            <FaGithub size={25} />
            <p>
              <a href="https://github.com/Im-unk">
                Check out more projects on Github!
              </a>{" "}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Github;
