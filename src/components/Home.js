import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

export default class Home extends Component {
  state = {
    blackout: false,
    showMenu: false
  };

  toggleAbout = time => {
    this.setState({
      blackout: true,
      showMenu: false
    });
    if (!this.state.showAbout) {
      setTimeout(() => {
        this.props.history.push("/about");
      }, time);
    }
  };
  toggleContact = time => {
    this.setState({
      blackout: true,
      showMenu: false
    });
    setTimeout(() => {
      this.props.history.push("/contact");
    }, time);
  };
  toggleSkills = time => {
    this.setState({
      blackout: true,
      showMenu: false
    });
    setTimeout(() => {
      this.props.history.push("/skills");
    }, time);
  };
  toggleProjects = time => {
    this.setState({
      blackout: true,
      showMenu: false
    });
    setTimeout(() => {
      this.props.history.push("/projects");
    }, time);
  };
  reset = () => {
    for (let prop in this.state) {
      this.setState({ [prop]: false });
    }
  };
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const {
      showAbout,
      showContact,
      showSkills,
      showProjects,
      blackout
    } = this.state;
    return (
      <div className="App">
        <div className="menu-container" onClick={this.toggleMenu}>
          <i className="fa fa-bars fa-2x" />
        </div>
        <div
          className={
            this.state.showMenu ? "fullscreen-menu show" : "fullscreen-menu"
          }
        >
          {(showAbout || showContact || showSkills || showProjects) && (
            <h3 onClick={this.reset}>Home</h3>
          )}
          {!showContact && (
            <h3 onClick={() => this.toggleContact(750)}>Contact</h3>
          )}
          {!showAbout && <h3 onClick={() => this.toggleAbout(750)}>About</h3>}
          {!showSkills && (
            <h3 onClick={() => this.toggleSkills(750)}>Skills</h3>
          )}
          {!showProjects && (
            <h3 onClick={() => this.toggleProjects(750)}>Projects</h3>
          )}
        </div>
        <div className="background" />
        <h2 onClick={() => this.toggleContact(2000)} className="top">
          Contact
        </h2>
        <h2 onClick={() => this.toggleAbout(2000)} className="left">
          About
        </h2>
        <h2 onClick={() => this.toggleSkills(2000)} className="right">
          Skills
        </h2>
        <h2 onClick={() => this.toggleProjects(2000)} className="bottom">
          Projects
        </h2>
        <div className="name">
          <h1 className={blackout ? "blackout" : ""}>Jonathan</h1>
          <h1 className={blackout ? "blackout" : ""}>___</h1>
          <h1 className={blackout ? "blackout" : ""}>McDonald</h1>
        </div>
        <h2
          className={blackout ? "welcome-message blackout" : "welcome-message"}
        >
          Full-stack Developer
        </h2>
      </div>
    );
  }
}
