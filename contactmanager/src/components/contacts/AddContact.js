import React, { Component } from 'react';
import { Consumer } from "../../context";
import uuid from 'uuid';

class AddContact extends Component {
    state = {
      name: '',
      email: '',
      phone: ''
    };

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = this.state;
      const newContact = {
          id: uuid(),
          name,
          email,
          phone
      };

      dispatch({
          type: 'ADD_CONTACT',
          payload: newContact
      });

      // Clear State
      this.setState({
          name: '',
          email: '',
          phone: ''
      });
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="my-4 card">
                            <h2 className="card-header">Добавить контакт</h2>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Имя</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Введите имя ..."
                                            name="name"
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Введите Email ..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Телефон</label>
                                        <input
                                            type="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Введите Телефон ..."
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
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
