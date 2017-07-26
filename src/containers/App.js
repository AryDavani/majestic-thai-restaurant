import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from '../components/BaseLayout';
import Menu from '../components/Menu';
import HomeImg from '../components/HomeImg';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">

        <BaseLayout>
          <HomeImg />
          <Menu />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
