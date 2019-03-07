import React from 'react';
import {Switch, Route} from 'react-router-dom';

//imported components
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Home from './components/Home'
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default (
  <Route
  render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={1000}
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={About} />
          <Route path="/contact" render={Contact} />
          <Route path="/projects" render={Projects} />
          <Route path="/skills" render={Skills} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )}
/>
)