import React, { Component } from 'react'

export default class EarningsAndExpenses extends Component {
    render() {
        return (
            <div>
                <div>
                    <h5> Expenses </h5>
                    <p id="expenses"> $0.00</p>
                </div>
                <div>
                    <h5>Income </h5>
                    <p id="income"> $0.00</p>
                </div>
            </div>
        )
    }
}
