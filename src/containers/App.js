import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from '../components/BaseLayout';
import Menu from '../components/Menu';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Menu />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
