

import { useNavigate } from "react-router-dom";
import "./Contact.scss";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="home-button" onClick={() => navigate("/")}>
        <i className="fas fa-home fa-3x" />
      </div>
      <h1>404 – Page Not Found</h1>
      <div className="contact-container">
        <svg
          id="peace"
          width="100%"
          height="100%"
          viewBox="0 0 640 640"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: "12px",
            filter: "drop-shadow(0 0 1vw #fff)",
          }}
        >
          <circle cx="320" cy="320" r="300" />
          <line x1="320" y1="20" x2="320" y2="620" />
          <line x1="320" y1="320" x2="520" y2="520" />
          <line x1="320" y1="320" x2="120" y2="520" />
        </svg>
        <div className="contact-text">
          <h3>Oops! The page you're looking for doesn't exist.</h3>
          <h3>Click the home icon to go back to safety.</h3>
        </div>
      </div>
    </div>
  );
}