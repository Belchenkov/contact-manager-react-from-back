import React, { Component } from 'react';
import { Consumer } from "../../context";
import axios from 'axios';

import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
    state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
    };

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

      const newContact = {
          name,
          email,
          phone
      };

      const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

      dispatch({
          type: 'ADD_CONTACT',
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
                            <h2 className="card-header">Добавить контакт</h2>
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
                                        value="Добавить контакт"
                                        className="btn btn-block btn-primary"
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

AddContact.propTypes = {
};

export default AddContact;
