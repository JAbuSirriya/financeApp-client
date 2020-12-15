import * as React from 'react';
import axios from 'axios';
import Accounts from './components/Accounts'
import AddtoEarningPurchaseList from './components/AddtoEarningPurchaseList'
import EarningsAndExpenses from './components/EarningsAndExpenses'
import { Header } from './components/Header'
import PurchasesAndEarningsList from './components/PurchasesAndEarningsList'
import { baseApiUrl } from './config';

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
      <div>
        < Header />
        <div className="accountsContainer" > 
          < Accounts 
            cashOnHandBalance={accountData && accountData.cashOnHandBalance || 0} 
            checkingBalance ={accountData && accountData.checkingBalance || 0}
            savingBalance ={accountData && accountData.savingBalance || 0}
            
          />
          < EarningsAndExpenses 
            expenses={accountData && accountData.expenses || []}
            income={accountData && accountData.income|| []}
          /> 
          < AddtoEarningPurchaseList  handleSubmitClick={submitTxData}/>
          < PurchasesAndEarningsList purchases={purchaseData} /> 
        </div>
      </div>
    );
}

export default App;
