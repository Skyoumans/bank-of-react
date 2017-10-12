import React from 'react'
import Debits from './Debits'

const DebitsList = (props) => {
    const debitComponents = props.debits.map((debit, index) => {
        return <Debits
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            key={index}
            />
    });
    return (
        <div>
            {debitComponents}
        </div>
    );
};

export default DebitsList