import React from 'react';
import propTypes from 'prop-types';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = e => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className='fas fa-sort-down'
            style={{ cursor: 'pointer' }}
          />
          {/* Delete Button */}
          <i
            className='fas fa-times'
            style={{ cursor: 'pointer', color: 'red', float: 'right' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list list-group-item'>Email: {email}</li>
            <li className='list list-group-item'>Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired,
  deleteClickHandler: propTypes.func.isRequired
};

export default Contact;
