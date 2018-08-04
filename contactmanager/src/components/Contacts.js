import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'j.doe@gmail.com',
                phone: '545-453-2345'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'kwill@gmail.com',
                phone: '123-064-2345'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'hjohnson@gmail.com',
                phone: '345-483-5302'
            }
        ]
    };

    deleteContact = id => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        })
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                { contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                )) }
            </React.Fragment>
        );
    }
}

export default Contacts;
