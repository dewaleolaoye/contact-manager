import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Contact
            name='Adewale Olaoye'
            email='adewaleolaoye21@gmail.com'
            phone='07085160602'
          />
          <Contact
            name='Babatunde Ayinla Olaoye'
            email='babatunde@gmail.com'
            phone='08027723360'
          />
        </div>
      </div>
    );
  }
}

export default App;
