import React from 'react';

import DebitsList from './DebitsList';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import NewDebitForm from './NewDebitForm'

const DebitsPage = (props) => {
    return (
        <div>
            <h1>Debits</h1>
            <AccountBalance accountBalance={props.accountBalance} />
            <NewDebitForm addNewDebit={props.addNewDebit} />
            <DebitsList debits={props.debits}/>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default DebitsPage