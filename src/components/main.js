import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './resumen';
import Contacto from './contacto';

const Main = () => (
	<Switch>
      <Route exact path="/" component={Landingpage} />
      <Route path="/aboutme" component={Aboutme} />
      <Route path="/resumen" component={Resume} />
       <Route path="/projects" component={Projects} />
       <Route path="/contacto" component={Contacto} /> 
	</Switch>
);

export default Main;