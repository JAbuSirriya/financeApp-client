import React, { Component } from 'react'
import Accounts from './components/Accounts'
import AddtoEarningPurchaseList from './components/AddtoEarningPurchaseList'
import EarningsAndExpenses from './components/EarningsAndExpenses'
import { Header } from './components/Header'
import PurchasesAndEarningsList from './components/PurchasesAndEarningsList'

export default class App extends Component {
  render() {
    return (
      <div>
        < Header />
        <div id="accountsContainer" > 
          < Accounts />
          < EarningsAndExpenses /> 
          < PurchasesAndEarningsList /> 
          < AddtoEarningPurchaseList />
        </div>
      </div>
    )
  }
}
