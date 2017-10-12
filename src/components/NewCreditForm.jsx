import React, { Component } from 'react';

class NewCreditForm extends Component {
    constructor(props) {
        super(props);

        this.defaultState = {
            newCredit: {
                amount: 0.00,
                description: '',
                date: Date.now(),
            },
        }

        this.state = {...this.defaultState};
    };

    handleInputChange = (event) => {
        const attr = event.target.name
        let value = event.target.value

        if (attr === 'amount') {
            value = Number(value);
        }

        const newCredit = {...this.state.newCredit}
        newCredit[attr] = value

        this.setState({newCredit})
    }

    resetForm = () => {
        const newCredit = {...this.defaultState.newCredit}
        this.setState({newCredit})
    }

    addNewCredit = (event) => {
        event.preventDefault()
        this.props.addNewCredit(this.state.newCredit)
        this.resetForm()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addNewCredit}>
                    <div>
                        <span>Amount (USD)</span>
                        <input
                            type="number"
                            name="amount"
                            paceholder="Amount"
                            value={this.state.newCredit.amount}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <span>Description</span>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.newCredit.description}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New Credit" />
                    </div>
                </form>
                
            </div>
        );
    }
}

export default NewCreditForm;