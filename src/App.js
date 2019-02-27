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
    showProjects: false,
    blackout: false
  };

  componentDidMount = () => {
    // this makes it so we don't see all the hidden components at once when the page loads
    setTimeout(() => {
      document.getElementById('body').classList.remove('hide-loading')
    }, 20);
  }

  toggleAbout = () => {
    this.setState({
      blackout: true
    })
    setTimeout(() => {
      this.setState({
        showAbout: !this.state.showAbout,
        showContact: false,
        showSkills: false,
        showProjects: false
      });
    }, 2000);
  };
  toggleContact = () => {
    this.setState({
      blackout: true
    })
    setTimeout(() => {
      this.setState({
        showAbout: false,
        showContact: !this.state.showContact,
        showSkills: false,
        showProjects: false
      });
    }, 2000);
  };
  toggleSkills = () => {
    this.setState({
      blackout: true
    })
    setTimeout(() => {
      this.setState({
        showAbout: false,
        showContact: false,
        showSkills: !this.state.showSkills,
        showProjects: false
      });
    }, 2000);
  };
  toggleProjects = () => {
    this.setState({
      blackout: true
    })
    setTimeout(() => {
      this.setState({
        showAbout: false,
        showContact: false,
        showSkills: false,
        showProjects: !this.state.showProjects
      });
    }, 2000);
  };
  reset = () => {
    this.setState({
      blackout: false,
      showAbout: false,
      showSkills: false,
      showProjects: false,
      showContact: false
    })
  }

  render() {
    const { showAbout, showContact, showSkills, showProjects, blackout } = this.state;
    return (
      <div className="App">
        <div className="background" />
        <h2 onClick={this.toggleContact} className="top">Contact</h2>
        <h2 onClick={this.toggleAbout} className="left">About</h2>
        <h2 onClick={this.toggleSkills} className="right">Skills</h2>
        <h2 onClick={this.toggleProjects} className="bottom">Projects</h2>
        <div className="name">
          <h1 className={blackout && 'blackout'}>Jonathan</h1>
          <h1 className={blackout && 'blackout'}>___</h1>
          <h1 className={blackout && 'blackout'}>McDonald</h1>
        </div>
        <h2 className={blackout ? 'welcome-message blackout' : 'welcome-message'}>Full-stack Developer</h2>
        <div className={showAbout ? "show" : "hide"}>
          <About homeFn={this.reset} />
        </div>
        <div className={showContact ? "show" : "hide"}>
          <Contact homeFn={this.reset} />
        </div>
        <div className={showSkills ? "show" : "hide"}>
          <Skills homeFn={this.reset} />
        </div>
        <div className={showProjects ? "show" : "hide"}>
          <Projects homeFn={this.reset} />
        </div>
      </div>
    );
  }
}

export default App;
