import React, { Component } from 'react'

const aggregate = val => val.reduce((acc, val) => acc + (+val.amount), 0);
export default class EarningsAndExpenses extends Component {
    render() {
        return (
            <div>
                <div>
                    <h5> Expenses </h5>
                    <p className="expenses"> ${aggregate(this.props.expenses)}</p>
                </div>
                <div>
                    <h5>Income </h5>
                    <p className="income"> ${aggregate(this.props.income)}</p>
                </div>
            </div>
        )
    }
}
