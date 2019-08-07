import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list list-group-item'>Email: {email}</li>
          <li className='list list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
