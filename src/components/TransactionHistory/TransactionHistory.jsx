import styles from './transaction-history.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} id={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
