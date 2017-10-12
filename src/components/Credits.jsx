import React from 'react';

const Credits = (props) => {
        return (
            <div>
                <span>Description: {props.description}</span><br />
                <span>Amount: {props.amount}</span><br />
                <span>Date: {props.date}</span><br />
            </div>
        );
    }

export default Credits;