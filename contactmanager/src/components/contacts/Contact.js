import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from "../../context";

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        } catch (e) {
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        }


    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div id="content" className="card card-body mb-3">
                            <h5>
                                {name}{' '}
                                <i
                                    onClick={this.onShowClick}
                                    className="fas fa-sort-down cur-p"
                                />
                                <i
                                    className="fas fa-times"
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                            </h5>
                            { showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null }
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
