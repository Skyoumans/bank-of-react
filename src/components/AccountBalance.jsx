import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountBalance extends Component {
    render() {
        return (
            <div><Link to="/">Home</Link>
            <div>
                <h1>AccountBalance</h1>
                <p>Your balance is: {this.props.accountBalance}</p>
            </div>
            </div>
        );
    }
}

export default AccountBalance