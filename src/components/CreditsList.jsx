import React from 'react';
import Credits from './Credits'

const CreditsList = (props) => {

    const creditComponents = props.credits.map((credit, index) => {
        return <Credits 
            description={credit.description}
            amount={credit.amount}
            date={credit.date}
            key={index}
            />
    })
    return (
        <div>
            {creditComponents}
        </div>
    )
}

export default CreditsList