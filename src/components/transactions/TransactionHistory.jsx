import { TransactionItem } from "./TransactionItem";
import css from './Transactions.module.css'

export const TransactionHistory = ({items}) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

            <tbody>
                {items.map((item) => {
                    return (
                        <TransactionItem props={item} key={item.id} />
                    )
                })}
          
        </tbody>
      </table>
    );
}
