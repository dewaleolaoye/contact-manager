import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className=''>
          <Header />
          <div className='container'>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
