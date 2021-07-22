import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';

function Router() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/services" component={ Services } />
        <Route path="/services/:id" component={ ServicesDetails } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/faq" component={ FAQ } />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Router;
