import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    };

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
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
                        onClick={this.onDeleteClick}
                    />
                </h5>
                { showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null }
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
