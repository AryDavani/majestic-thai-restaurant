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

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/menu' component={Menu}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' component={Homepage}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
