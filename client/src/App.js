import * as React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Jumbotron,  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accounts from './components/Accounts'
import AddtoEarningPurchaseList from './components/AddtoEarningPurchaseList'
import EarningsAndExpenses from './components/EarningsAndExpenses'
import { Header } from './components/Header'
import PurchasesAndEarningsList from './components/PurchasesAndEarningsList';
import Login from './components/Login';
import Register from './components/Register';
import { baseApiUrl } from './config';
import { isLoggedIn } from './util';
import { Logout } from './components/Logout';

const App = () =>  {
  const [accountData, setAccountData] = React.useState({});
  const [purchaseData, setPurchaseData] = React.useState([]);
  const [refetch, setRefetch] = React.useState(true);
  React.useEffect(() => {
    if(refetch){
      axios.get(`${baseApiUrl}/accounts`).then((response) => {
        setAccountData(response.data);
        setRefetch(false);
      }).catch(err => alert('error in api call'))
      axios.get(`${baseApiUrl}/purchases`).then((response) => {
        setPurchaseData(response.data.data);
        setRefetch(false);
      }).catch(err => alert('error in api call'))
    }
  }, [refetch]);
  const submitTxData = React.useCallback((data) => {
    axios.post(`${baseApiUrl}/purchases/`, data)
    .then(res => {
      setRefetch(true);
    })
  }, [])
    return (
      <Router>
      
      {isLoggedIn() && <Navbar bg="light" expand="lg">
        
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/transactions/add">Add Transaction</Nav.Link>
      <Nav.Link href="/transactions">List Tractions</Nav.Link>
      
    </Nav>
</Navbar.Collapse>
          
          <Nav.Link href="/logout">Logout</Nav.Link>
          
  

</Navbar>}
        

        <Jumbotron>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/">
          < Accounts 
            cashOnHandBalance={accountData && accountData.cashOnHandBalance || 0} 
            checkingBalance ={accountData && accountData.checkingBalance || 0}
            savingBalance ={accountData && accountData.savingBalance || 0}
            
          />
          < EarningsAndExpenses 
            expenses={accountData && accountData.expenses || []}
            income={accountData && accountData.income|| []}
          /> 
          </Route>
          <Route exact path="/transactions/add">
            < AddtoEarningPurchaseList  handleSubmitClick={submitTxData}/>
          </Route>
          <Route exact path="/transactions">
          < PurchasesAndEarningsList purchases={purchaseData} /> 
          </Route>
        </Switch>
        </Jumbotron>


        
      
    </Router>
    );
}

export default App;
