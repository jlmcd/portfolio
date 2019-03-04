import React from "react";
import "./Projects.scss";
import Slider from "react-slick";
import ImageZoom from "react-medium-image-zoom";

export default function Projects(props) {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="projects">
      <div className="home-button" onClick={() => props.homeFn()}>
        <i className="fas fa-arrow-left fa-3x" />
      </div>
      <h1>Projects</h1>
      <div className="project-card">
        <Slider {...carouselSettings}>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=tuBmy5gAPt8vLTLrrJquu4wEvi4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfMbfervz8UAffSpTjQA3eL21EjXpGo7qLontfY8ngpbtI5L5agYUbhl4lWdI",
                alt: "Ostinato Loop Editor"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=tuBmy5gAPt8vLTLrrJquu4wEvi4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfMbfervz8UAffSpTjQA3eL21EjXpGo7qLontfY8ngpbtI5L5agYUbhl4lWdI",
                alt: "Ostinato Loop Editor"
              }}
            />
          </div>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=t1%2BVHPItfe1j0Ox0nMLMF4jD0ro%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6fJLXcLLzrEAUfnpTjQBgKbm1SDWzE47pK427fI532ZXiI8H5agYUbhl4lWdI",
                alt: "Ostinato Dashboard"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=t1%2BVHPItfe1j0Ox0nMLMF4jD0ro%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6fJLXcLLzrEAUfnpTjQBgKbm1SDWzE47pK427fI532ZXiI8H5agYUbhl4lWdI",
                alt: "Ostinato Dashboard"
              }}
            />
          </div>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=0hcnKiSQk5m%2B4AP4Ri4EZ0ksZso%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpLZHWebeookAVLHpVjQAxLL21SDnoGo7tKI26eNog35CzJ5b5agYUbhl4lWdI",
                alt: "Ostinato Account Editor"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=0hcnKiSQk5m%2B4AP4Ri4EZ0ksZso%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpLZHWebeookAVLHpVjQAxLL21SDnoGo7tKI26eNog35CzJ5b5agYUbhl4lWdI",
                alt: "Ostinato Account Editor"
              }}
            />
          </div>
        </Slider>
        <h2>Ostinato</h2>
        <h3>
          React | HTML5 | CSS3 | NodeJS | Axios | Express | Massive | Heroku |
          PostgreSQL | Amazon S3 | Tone.js | Socket.io | Nodemailer
        </h3>
        <p>
          Ostinato is a simple music creation tool for creating musical loops in
          collaboration with other musicians. It utilizes Tone.js to manipulate
          the Web Audio API, as well as Socket.io to provide a synchronized
          editing experience for multiple users.
        </p>
        <p>
          Profile pictures and instrument samples are stored using Amazon S3
          file storage and a smooth and secure login/registration is facilitated
          by the use of bcrypt.js.
        </p>
        <a href="https://www.ostinatoloop.com" target="blank">
          Live Site
        </a>
        <a href="https://github.com/trair/ostinato" target="blank">
          GitHub Repo
        </a>
      </div>

      <div className="project-card">
        <Slider {...carouselSettings}>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=thNWC%2BpqAE3%2B5bhzHWIYzCn9YQg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjsfM-OKrKgo0BFcXkCjQBgee-1STDjQI68K9nsftkn3pDiIZX5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=thNWC%2BpqAE3%2B5bhzHWIYzCn9YQg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjsfM-OKrKgo0BFcXkCjQBgee-1STDjQI68K9nsftkn3pDiIZX5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
            />
          </div>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=eUU0er4iD2R23y8Q5rCq8YXviY8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvfsGOeeOg8kBEfX0JjQA2Kei1EmboRo7pI9i7fdp035GxJZL5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=eUU0er4iD2R23y8Q5rCq8YXviY8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvfsGOeeOg8kBEfX0JjQA2Kei1EmboRo7pI9i7fdp035GxJZL5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
            />
          </div>
          <div className="image">
            <ImageZoom
              image={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IHpVkbZG5B8wZm1ZUJQGWHUDqY0%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfpbff-Cg8UARfi0FjQBhfui1EmWyRo67It_uftkniJDmLJL5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
              zoomImage={{
                src:
                  "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IHpVkbZG5B8wZm1ZUJQGWHUDqY0%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfpbff-Cg8UARfi0FjQBhfui1EmWyRo67It_uftkniJDmLJL5agYUbhl4lWdI",
                alt: "Cramify Game"
              }}
            />
          </div>
        </Slider>
        <h2>Cramify</h2>
        <h3>
          React | HTML5 | CSS3 | Sass | NodeJS | Axios | Express | Massive |
          Heroku | PostgreSQL | Socket.io
        </h3>
        <p>
          Cramify is a gameshow-style study tool similar to Kahoot. It utilizes
          Socket.IO to allow for a real-time playing experience with other users
          and a competitive vibe.
        </p>
        <p>
          Socket.IO provides the legwork for interfacing with WebSockets, and a
          smooth and secure login/registration is facilitated by the use of
          bcrypt.js.
        </p>
        <a href="https://cramify.net" target="blank">
          Live Site
        </a>
        <a href="https://github.com/Cramify/cramify" target="blank">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
