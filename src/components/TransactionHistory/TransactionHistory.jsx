import css from '../TransactionHistory/TransactionHistory.module.css';
import clsx from 'clsx';

function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.transactionTable)}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      {items.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
