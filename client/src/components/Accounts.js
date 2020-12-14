import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div>
                <div className='accounts'>
                    <h3>Checking Account Balance</h3>
                    <h4 className="checkingAccountBalance">$1,000.00</h4>
                    <h3>Savings Account Balance</h3>
                    <h4 className="checkingAccountBalance">$1,000.00</h4>
                    <h3>Cash-On-Hand Balance</h3>
                    <h4 className="checkingAccountBalance">$1,000.00</h4>
                </div>
            </div>
        )
    }
}
