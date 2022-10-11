import PropTypes from 'prop-types'

export const TransactionItem = ({ props }) => {
    return (
      <tr>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>
    );
}

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};