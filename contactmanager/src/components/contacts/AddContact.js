import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddContact extends Component {
    state = {
      name: '',
      email: '',
      phone: ''
    };

    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="my-4 card">
                <h2 className="card-header">Добавить контакт</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Введите имя ..."
                                name="name"
                                value={name}
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
    }
}

AddContact.propTypes = {
};

export default AddContact;
