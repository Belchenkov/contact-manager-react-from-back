import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;