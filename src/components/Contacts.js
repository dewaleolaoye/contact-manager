import React from 'react';
import Contact from './Contact';

import { Consumer } from '../Context';

class Contacts extends React.Component {
  deleteContact = id => {
    console.log(id);
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          // const { contacts } = value;
          return (
            <React.Fragment>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
