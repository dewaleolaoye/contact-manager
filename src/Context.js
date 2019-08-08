import { React, Component } from 'react';

const Context = React.createContext();

// const Context = createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Adewale Olaoye',
        email: 'adewaleolaoye21@gmail.com',
        phone: '07085160602'
      },
      {
        id: 2,
        name: 'Babatunde Ayinla Olaoye',
        email: 'daddyt@gmail.com',
        phone: '08027723360'
      },
      {
        id: 3,
        name: 'Samuel Jackson',
        email: 'sjack@gmail.com',
        phone: '08145321321'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
