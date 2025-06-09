import { useNavigate } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="home-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left fa-3x" />
      </div>
      <h1>Contact</h1>
      <div className="contact-container">
        <svg
          id="peace"
          width="100%"
          height="100%"
          viewBox="0 0 644 1290"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5
          }}
        >
          <path
            d="M101.072,1203.96c-4.023,-31.293 -8.564,-60.147 -21.188,-89.3c-20.199,-46.65 -64.803,-110.027 -70.996,-159.84c-7.647,-61.512 22.439,-153.219 25.549,-219.606c7.082,-151.156 -2.427,-302.733 -1.044,-453.958c0.63,-68.945 -13.807,-165.664 13.31,-229.779c13.818,-32.673 62.534,-59.011 94.696,-33.75c44.385,34.862 24.692,100.346 26.236,147.728c3.133,96.092 -0.897,189.659 12.431,285.421c4.303,30.917 7.709,66.364 22.489,94.482"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M140.946,226.702c-23.15,0.331 -48.718,-1.208 -67.568,-16.476"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M147.202,389.932c-26.204,7.321 -57.433,8.369 -77.357,-12.803"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M213.753,581.723c36.809,-42.41 53.194,-102.331 69.063,-154.961c32.413,-107.493 53.989,-241.31 116.381,-335.553c43.172,-65.211 139.149,-74.9 145.676,18.053c3.704,52.75 -60.145,183.759 -80.676,236.876c-28.976,74.969 -53.647,152.929 -61.191,233.267"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M383.147,242.186c12.725,25.861 37.333,40.981 65.738,44.549"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M336.43,390.289c-7.418,20.708 22.787,33.955 37.437,39.485c4.15,1.566 8.402,2.986 12.727,3.981c5.081,1.169 10.258,1.484 15.454,1.262"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M53.377,732.398c26.37,-7.756 50.332,-28.248 72.198,-44.323c7.042,-5.177 16.335,-14.425 25.04,-16.589c24.419,-6.07 52.689,-2.928 77.716,-4.135c32.226,-1.555 64.36,-5.897 96.34,-10.001c23.242,-2.984 58.054,-6.807 75.594,-25.047"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M405.384,657.369c15.573,15.262 20.282,48.819 -3.605,60.041c-25.819,12.128 -71.522,-8.781 -79.504,-36.369"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M198.297,778.6c48.874,26.802 112.811,25.568 159.168,-5.481c14.622,-9.794 38.593,-24.853 37.021,-45.079"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M323.053,813.686c-10.228,21.819 -25.971,41.858 -33.733,64.726c-16.426,48.395 43.795,93.006 87.827,71.326c9.545,-4.699 16.621,-12.145 19.802,-22.317c8.443,-27.003 -16.81,-47.292 -40.075,-54.987c-13.777,-4.557 -27.934,-8.28 -42.349,-10.144"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M578.728,818.211c0.748,17.452 -7.514,30.944 -15.468,45.923c-4.421,8.325 -8.494,16.83 -12.848,25.19c-14.576,27.988 -37.145,83.664 -75.373,79.859c-10.998,-1.094 -20.414,-6.204 -27.919,-14.245c-16.474,-17.65 -9.542,-44.1 15.951,-46.535c19.833,-1.894 38.215,11.226 50.903,24.78"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M428.84,587.851c31.278,-20.145 90.466,-9.911 114.2,18.727c12.518,15.105 17.31,35.632 16.976,54.926c-0.467,26.974 -13.24,55.47 -24.084,79.608c-22.488,50.06 -49.711,102.595 -83.399,146.036"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
          <path
            d="M95.586,1231.74c2.547,19.805 31.167,19.539 47.279,22.131c50.706,8.156 103.428,5.725 154.628,7.372c37.482,1.206 129.952,10.602 160.488,-8.521c25.262,-15.82 30.978,-75.513 40.733,-103.066c21.475,-60.658 70.614,-107.183 92.059,-167.214c7.012,-19.631 7.354,-41.372 10.027,-61.855c3.48,-26.663 3.239,-54.047 10.096,-80.187c8.956,-34.138 24.63,-66.494 24.827,-102.541c0.213,-38.866 -29.293,-59.327 -66.547,-48.934"
            style={{ fill: "none", stroke: "#fff", strokeWidth: "18px" }}
          />
        </svg>
        <div>
          <div className="icons">
            <a href="https://github.com/jlmcd">
              <i className="fab fa-github-square fa-3x" />
            </a>
            <a href="https://www.linkedin.com/in/jon-mcd/">
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a
              href="mailto:jonathan@mcdonald.email?Subject=Hi,%20Jonathan!"
              target="_top"
            >
              <i className="fas fa-envelope fa-3x" />
            </a>
          </div>
          <div className="contact-text">
            <a href="https://github.com/jlmcd">
              <h3>github.com/jlmcd</h3>
            </a>
            <a href="https://www.linkedin.com/in/jon-mcd/">
              <h3>linkedin.com/in/jon-mcd/</h3>
            </a>
            <h3>jonathan@mcdonald.email</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
