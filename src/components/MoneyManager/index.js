import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initailTransaction = []
// Write your code here

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'INCOME',
    transactionList: initailTransaction,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeOption = event => {
    const {type} = this.state
    console.log(type)
    this.setState({type: event.target.value})
    console.log({type})
  }

  onDelete = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      each => each.id !== id,
    )
    this.setState({transactionList: filteredTransactionList})
  }

  onAddingTransaction = event => {
    event.preventDefault()
    let {balance, income, expenses} = this.state
    const {title, amount, type} = this.state

    if (type === 'INCOME') {
      income += amount
      balance += amount
    } else {
      expenses += amount
      balance -= amount
    }
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      balance,
      income,
      expenses,
    }))
  }

  render() {
    const {
      balance,
      income,
      expenses,
      title,
      amount,
      transactionList,
    } = this.state

    return (
      <div className="bg-container">
        <div className="banner">
          <h1 className="banner-heading">Hi, Richard</h1>
          <p className="banner-pera">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="balance-tab-container">
          <MoneyDetails
            transactionTypeOptions={transactionTypeOptions}
            balance={balance}
            income={income}
            expenses={expenses}
          />
        </div>

        <div className="input-history-container">
          <form className="input-container">
            <h1 className="input-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              value={title}
              placeholder="TITLE"
              className="input"
              id="title"
              onChange={this.onChangeTitle}
            />

            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              value={amount}
              placeholder="AMOUNT"
              className="input"
              id="amount"
              onChange={this.onChangeAmount}
            />

            <label className="label" htmlFor="amount">
              TYPE
            </label>
            <select className="input" onChange={this.onChangeOption}>
              <option className="input" value="INCOME" defaultValue>
                Income
              </option>
              <option className="input" value="EXPENSES">
                Expenses
              </option>
            </select>
            <button
              type="button"
              className="add-btn"
              onClick={this.onAddingTransaction}
            >
              Add
            </button>
          </form>

          <div className="history-container">
            <h1 className="input-heading">History</h1>
            <div className="child-container">
              <p className="title">Title</p>
              <p className="title">Amount</p>
              <p className="title">Type</p>
            </div>
            <ul>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
