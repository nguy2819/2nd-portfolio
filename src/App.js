import React, { Component } from 'react';

import './App.css';
import {BrowserRouter,
Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyWorks from './MyWorks';
import ContactMe from './ContactMe';

export default () => (
  <BrowserRouter>
  <Switch>
  <Route path ="/" exact component ={Home}/>
  <Route path ="/AboutMe" component ={AboutMe}/>
  <Route path ="/MyWorks" component ={MyWorks}/>
  <Route path ="/ContactMe" component ={ContactMe}/>
  </Switch>
  </BrowserRouter>
)

