export const TransactionItem = ({props}) => {
    return (
      <tr>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>
    );
}