// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="balance-view-container">
      <div className="balance-container">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="balance-container-pera">Your Balance</p>
          <p className="balance" data-testId="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="balance-container-pera">Your Income</p>
          <p className="balance" data-testId="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          className="balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
        />
        <div>
          <p className="balance-container-pera">Your Expenses</p>
          <p className="balance" data-testId="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
