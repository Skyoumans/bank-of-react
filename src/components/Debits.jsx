import React from 'react';

const Debits = (props) => {
    return (
        <div>
            <span>Description: {props.description}</span><br />
            <span>Amount: {props.amount}</span><br />
            <span>Date: {props.date}</span><br />
        </div>
    )
}

export default Debits;