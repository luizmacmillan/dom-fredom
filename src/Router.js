import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Partners from './pages/Partners';
import BookIn from './pages/BookIn';

function Router() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/services" component={ Services } />
        <Route path="/services/:id" component={ ServicesDetails } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/testimonials" component={ Testimonials } />
        <Route path="/partners" component={ Partners } />
        <Route path="/bookIn" component={ BookIn } />
        <Route path="/faq" component={ FAQ } />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Router;
