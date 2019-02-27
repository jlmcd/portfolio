import React from "react";
import "./Contact.scss";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="home-button" onClick={() => props.homeFn()}>
        <i className="fas fa-arrow-left fa-3x" />
      </div>
      <h1>Contact</h1>
      <div className="icons">
        <a href="https://github.com/trair">
          <i className="fab fa-github-square fa-3x" />
        </a>
        <a href="https://www.linkedin.com/in/jon-mcd/">
          <i className="fab fa-linkedin fa-3x" />
        </a>
        <a
          href="mailto:jonathanlmcd@gmail.com?Subject=Hi,%20Jonathan!"
          target="_top"
        >
          <i className="fas fa-envelope fa-3x" />
        </a>
      </div>
      <div className='contact-text'>
        <a href="https://github.com/trair">
          <h3>github.com/trair</h3>
        </a>
        <a href="https://www.linkedin.com/in/jon-mcd/">
          <h3>linkedin.com/in/jon-mcd/</h3>
        </a>
          <h3>jonathanlmcd@gmail.com</h3>
      </div>
    </div>
  );
}
