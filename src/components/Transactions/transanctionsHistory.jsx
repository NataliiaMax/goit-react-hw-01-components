import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactions.module.css';

const TransactionsHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{items.map(item => (
    <tbody>
    <tr key={items.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
     </tbody>))}
</table>
)}

TransactionsHistory.propTypes ={
items: PropTypes.arrayOf(
    PropTypes.shape(
        { id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )
).isRequired
}

  export default TransactionsHistory;