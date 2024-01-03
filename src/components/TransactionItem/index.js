// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  const newType = type === 'INCOME' ? 'Income' : 'Expenses'

  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <p className="amount">{amount} </p>
      <p className="type">{newType} </p>
      <img
        data-testid="delete"
        className="delete-image"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        onClick={onClickDelete}
      />
    </li>
  )
}
export default TransactionItem
