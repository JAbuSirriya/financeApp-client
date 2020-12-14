import React, { Component } from 'react'

export default class EarningsAndExpenses extends Component {
    render() {
        return (
            <div>
                <div>
                    <h5> Expenses </h5>
                    <p className="expenses"> $0.00</p>
                </div>
                <div>
                    <h5>Income </h5>
                    <p className="income"> $0.00</p>
                </div>
            </div>
        )
    }
}
