import React, { Component } from 'react'



export default class PurchasesAndEarningsList extends Component {


    render() {
        return (
            <table>
                <thead>
                    <th>Description</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    {this.props.purchases.map(v => (
                        <tr>
                            <th>
                                    {v.description}
                            </th>
                            <th>
                                        {v.amount}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
