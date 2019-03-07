import React from 'react';
import {Switch, Route} from 'react-router-dom';

//imported components
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Home from './components/Home'

export default (
    <Switch>
        <Route exact path = '/' component={Home}></Route>
        <Route path = '/about' component={About}></Route>
        <Route path = '/contact' component={Contact}></Route>
        <Route path = '/projects' component={Projects}></Route>
        <Route path = '/skills' component={Skills}></Route>
    </Switch>
)