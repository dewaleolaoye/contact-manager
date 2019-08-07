import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
