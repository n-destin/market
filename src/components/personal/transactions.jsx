import React, { useState } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { Link } from 'react-router-dom';


function TransactionDashboard() {
  const [transactions, setTransactions] = useState([]);

  const verifyOwnership = function (){
    return axios.get(`/verifyOwnership`, {headers : {'Authorization' : localStorage.getItem('userToken')}})
  };

  // Function to fetch transactions from an API
  async function getTransactions(userId){
    axios.get(`/getTransactions?userId=${userId}`).then(response =>{setTransactions(response.data)})
  }

  getTransactions();

  // Function to handle transaction status change
  const updatedTransaction = produce((TransactionId, newStatus)=>{
    transactions.map(transaction=>{
      if(transaction.id == TransactionId) axios.get(`/changeTransactionStatus?transactionId=${TransactionId}`)
    })
  })


  // how do I know that the person reviewing this is the seller in transaction?
  return (
    <div>
      <div className="navbar" style={{backgroundColor : 'rgb(29, 65, 29)', color : 'white'}}>
        <Link  to  = {'/'} className='navbar-brand text-white ml-5'>The College Market</Link>
      <h4 className='mx-auto'><span style={{fontSize : "1rem", color: "white"}}>Transactions Dashboard </span></h4></div>
      <div className='navbar m-0 p-3'> 
        <h5 className='m-0' style={{margin : '0'}}>{localStorage.getItem('useName')}'s Transactions</h5>
        <div className='d-flex flex-row'>
          <input type="text"  style={{border : '1px solid black', height : '2rem'}} className ="mt-2 mr-5 mb-0 ml-0" placeholder='Search all orders'/>
          <input type="button" value='Search Orders' className='mt-2 p-1'/>
        </div>
      </div>
      <table className='table'>
        <thead>
          <tr className='thead'>
            <th>Transaction ID</th>
            <th>Product</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            const buyer = verifyOwnership();
            (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.status}</td>
                <td>
                  {(buyer)? <button className='btn btn-primary' onClick={()=>{console.log('changing the status of transaction');}}>Complete Transaction</button>: ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionDashboard;
