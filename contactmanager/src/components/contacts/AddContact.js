import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Обязательное поле' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Обязательное поле' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Обязательное поле' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <h3 className="card-header">Добавить контакт</h3>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Имя"
              name="name"
              placeholder="Введите Имя ..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Введите Email ..."
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Телефон"
              name="phone"
              placeholder="Введите Телефон ..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Добавить контакт"
              className="btn btn-outline-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}


AddContact.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default connect(
    null,
    { addContact }
)(AddContact);
