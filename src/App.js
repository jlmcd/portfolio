import React, { Component } from "react";
import "./App.scss";
import "./reset.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    )
  }
  // state = {
  //   showAbout: false,
  //   showContact: false,
  //   showSkills: false,
  //   showProjects: false,
  //   blackout: false,
  //   showMenu: false
  // };

  // componentDidMount = () => {
  //   // this makes it so we don't see all the hidden components at once when the page loads
  //   setTimeout(() => {
  //     document.getElementById("body").classList.remove("hide-loading");
  //   }, 20);
  // };

  // toggleAbout = (time) => {
  //   this.setState({
  //     blackout: true,
  //     showMenu: false
  //   });
  //   if (!this.state.showAbout) {
  //     setTimeout(() => {
  //       this.setState({
  //         showAbout: !this.state.showAbout,
  //         showContact: false,
  //         showSkills: false,
  //         showProjects: false
  //       });
  //     }, time);
  //   } else {
  //     this.setState({
  //       showAbout: !this.state.showAbout,
  //       showContact: false,
  //       showSkills: false,
  //       showProjects: false
  //     });
  //   }
  // };
  // toggleContact = (time) => {
  //   this.setState({
  //     blackout: true,
  //     showMenu: false
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       showAbout: false,
  //       showContact: !this.state.showContact,
  //       showSkills: false,
  //       showProjects: false
  //     });
  //   }, time);
  // };
  // toggleSkills = (time) => {
  //   this.setState({
  //     blackout: true,
  //     showMenu: false
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       showAbout: false,
  //       showContact: false,
  //       showSkills: !this.state.showSkills,
  //       showProjects: false
  //     });
  //   }, time);
  // };
  // toggleProjects = (time) => {
  //   this.setState({
  //     blackout: true,
  //     showMenu: false
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       showAbout: false,
  //       showContact: false,
  //       showSkills: false,
  //       showProjects: !this.state.showProjects
  //     });
  //   }, time);
  // };
  // reset = () => {
  //   for (let prop in this.state) {
  //     this.setState({[prop]: false})
  //   }
  //   // this.setState({
  //   //   blackout: false,
  //   //   showAbout: false,
  //   //   showSkills: false,
  //   //   showProjects: false,
  //   //   showContact: false,
  //   //   showMenu: false
  //   // });
  // };
  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu
  //   });
  // };

  // render() {
  //   const {
  //     showAbout,
  //     showContact,
  //     showSkills,
  //     showProjects,
  //     blackout
  //   } = this.state;
  //   return (
  //     <div className="App">
  //       <div className="menu-container" onClick={this.toggleMenu}>
  //         <i className="fa fa-bars fa-3x" />
  //       </div>
  //       <div
  //         className={
  //           this.state.showMenu ? "fullscreen-menu show" : "fullscreen-menu"
  //         }
  //       >
  //         {(showAbout || showContact || showSkills || showProjects) && <h3 onClick={this.reset}>Home</h3>}
  //         {!showContact && <h3 onClick={() => this.toggleContact(750)}>Contact</h3>}
  //         {!showAbout && <h3 onClick={() => this.toggleAbout(750)}>About</h3>}
  //         {!showSkills && <h3 onClick={() => this.toggleSkills(750)}>Skills</h3>}
  //         {!showProjects && <h3 onClick={() => this.toggleProjects(750)}>Projects</h3>}
  //       </div>
  //       <div className="background" />
  //       <h2 onClick={() => this.toggleContact(2000)} className="top">
  //         Contact
  //       </h2>
  //       <h2 onClick={() => this.toggleAbout(2000)} className="left">
  //         About
  //       </h2>
  //       <h2 onClick={() => this.toggleSkills(2000)} className="right">
  //         Skills
  //       </h2>
  //       <h2 onClick={() => this.toggleProjects(2000)} className="bottom">
  //         Projects
  //       </h2>
  //       <div className="name">
  //         <h1 className={blackout ? "blackout" : ""}>Jonathan</h1>
  //         <h1 className={blackout ? "blackout" : ""}>___</h1>
  //         <h1 className={blackout ? "blackout" : ""}>McDonald</h1>
  //       </div>
  //       <h2
  //         className={blackout ? "welcome-message blackout" : "welcome-message"}
  //       >
  //         Full-stack Developer
  //       </h2>
  //       <div className={showAbout ? "show" : "hide"}>
  //         <About homeFn={this.reset} />
  //       </div>
  //       <div className={showContact ? "show" : "hide"}>
  //         <Contact homeFn={this.reset} />
  //       </div>
  //       <div className={showSkills ? "show" : "hide"}>
  //         <Skills homeFn={this.reset} />
  //       </div>
  //       <div className={showProjects ? "show" : "hide"}>
  //         <Projects homeFn={this.reset} />
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
