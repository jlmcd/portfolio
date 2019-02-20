import React, { Component } from "react";
import "./App.scss";
import "./reset.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

class App extends Component {
  state = {
    showAbout: false,
    showContact: false,
    showSkills: false,
    showProjects: false
  };

  toggleAbout = () => {
    this.setState({
      showAbout: !this.state.showAbout,
      showContact: false,
      showSkills: false,
      showProjects: false
    });
  };
  toggleContact = () => {
    this.setState({
      showAbout: false,
      showContact: !this.state.showContact,
      showSkills: false,
      showProjects: false
    });
  };
  toggleSkills = () => {
    this.setState({
      showAbout: false,
      showContact: false,
      showSkills: !this.state.showSkills,
      showProjects: false
    });
  };
  toggleProjects = () => {
    this.setState({
      showAbout: false,
      showContact: false,
      showSkills: false,
      showProjects: !this.state.showProjects
    });
  };

  render() {
    const { showAbout, showContact, showSkills, showProjects } = this.state;
    return (
      <div className="App">
        <div className="background" />
        <h2 onClick={this.toggleContact} className="top">Contact</h2>
        <h2 onClick={this.toggleAbout} className="left">About</h2>
        <h2 onClick={this.toggleSkills} className="right">Skills</h2>
        <h2 onClick={this.toggleProjects} className="bottom">Projects</h2>
        <div className="name">
          <h1>Jonathan</h1>
          <h1>___</h1>
          <h1>McDonald</h1>
        </div>
        <h2 className="welcome-message">Full-stack Developer</h2>
        <div className={showAbout ? "show" : "hide"}>
          <About />
        </div>
        <div className={showContact ? "show" : "hide"}>
          <Contact />
        </div>
        <div className={showSkills ? "show" : "hide"}>
          <Skills />
        </div>
        <div className={showProjects ? "show" : "hide"}>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
