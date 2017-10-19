import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Menu from './components/Menu';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

import PROJECT_URI from './utility';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path={PROJECT_URI + '/'} component={Homepage}/>
        <Route path={PROJECT_URI + '/menu'} component={Menu}/>
        <Route path={PROJECT_URI + '/about'} component={About}/>
        <Route path={PROJECT_URI + '/contact'} component={Contact}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
