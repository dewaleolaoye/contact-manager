import React from 'react';
import propTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name} <i className='fas fa-sort-down' />
        </h4>
        <ul className='list-group'>
          <li className='list list-group-item'>Email: {email}</li>
          <li className='list list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
