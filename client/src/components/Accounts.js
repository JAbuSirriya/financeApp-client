import React, { Component } from 'react'

export default class  extends Component {
    
    render() {
        const { cashOnHandBalance, checkingBalance, savingBalance} = this.props;
        return (
            <div>
                <div className='accounts'>
                    <h3>Checking Account Balance</h3>
                    <h4 className="checkingAccountBalance">${cashOnHandBalance}</h4>
                    <h3>Savings Account Balance</h3>
        <h4 className="checkingAccountBalance">${savingBalance}</h4>
                    <h3>Cash-On-Hand Balance</h3>
        <h4 className="checkingAccountBalance">${checkingBalance}</h4>
                </div>
            </div>
        )
    }
}
