import React from 'react';
import propTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { contact } = this.props;
    return (
      <div className='card card-body mb-3'>
        <h4>{contact.name}</h4>
        <ul className='list-group'>
          <li className='list list-group-item'>Email: {contact.email}</li>
          <li className='list list-group-item'>Phone: {contact.phone}</li>
        </ul>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
