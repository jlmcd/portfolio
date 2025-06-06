import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [blackout, setBlackout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const navigateWithDelay = (path, time) => {
    setBlackout(true);
    setShowMenu(false);
    setTimeout(() => navigate(path), time);
  };

  const reset = () => setBlackout(false);

  return (
    <div className="App">
      <div className="menu-container" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa fa-bars fa-2x" />
      </div>
      <div className={showMenu ? "fullscreen-menu show" : "fullscreen-menu"}>
        <h3 onClick={reset}>Home</h3>
        <h3 onClick={() => navigateWithDelay('/contact', 750)}>Contact</h3>
        <h3 onClick={() => navigateWithDelay('/about', 750)}>About</h3>
        <h3 onClick={() => navigateWithDelay('/skills', 750)}>Skills</h3>
        <h3 onClick={() => navigateWithDelay('/projects', 750)}>Projects</h3>
      </div>
      <div className="background" />
      <h2 onClick={() => navigateWithDelay('/contact', 2000)} className="top">Contact</h2>
      <h2 onClick={() => navigateWithDelay('/about', 2000)} className="left">About</h2>
      <h2 onClick={() => navigateWithDelay('/skills', 2000)} className="right">Skills</h2>
      <h2 onClick={() => navigateWithDelay('/projects', 2000)} className="bottom">Projects</h2>
      <div className="name">
        <h1 className={blackout ? "blackout" : ""}>Jonathan</h1>
        <h1 className={blackout ? "blackout" : ""}>___</h1>
        <h1 className={blackout ? "blackout" : ""}>McDonald</h1>
      </div>
      <h2 className={blackout ? "welcome-message blackout" : "welcome-message"}>
        Full-stack Developer
      </h2>
    </div>
  );
}
