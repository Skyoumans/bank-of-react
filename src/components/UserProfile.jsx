import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>User Profile</h1>
                <div><p>Username: {this.props.userName}</p></div>
                <div><p>Member Since: {this.props.memberSince}</p></div>
            </div>
        );
    }
}

export default UserProfile;