import React, { Component } from 'react';
import { Consumer } from "../../context";
import axios from 'axios';

import TextInputGroup from "../layout/TextInputGroup";

class EditContact extends Component {
    state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        });
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = async (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = this.state;

      // Check For Errors
      if (name === '') {
          this.setState({
              errors: { name: 'Обязательное поле' }
          });
          return;
      }
      if (email === '') {
          this.setState({
              errors: { email: 'Обязательное поле' }
          });
          return;
      }
      if (phone === '') {
          this.setState({
              errors: { phone: 'Обязательное поле' }
          });
          return;
      }

      const updContact = {
          name,
          email,
          phone
      };

      const { id } = this.props.match.params;

      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

      dispatch({
          type: 'UPDATE_CONTACT',
          payload: res.data
      });

      // Clear State
      this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}
      });

      this.props.history.push('/');
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="my-4 card">
                            <h2 className="card-header">Редактировать контакт</h2>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
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
                                        type="phone"
                                        placeholder="Введите Телефон ..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Обновить контакт"
                                        className="btn btn-block btn-warning"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

EditContact.propTypes = {
};

export default EditContact;
