import React, { Component } from 'react'
import Accounts from './components/Accounts'
import EarningsAndExpenses from './components/EarningsAndExpenses'
import { Header } from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        < Header />
        <div id="accountsContainer" > 
          < Accounts />
          < EarningsAndExpenses /> 
        </div>
      </div>
    )
  }
}
