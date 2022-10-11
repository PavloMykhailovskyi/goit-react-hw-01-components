import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const StatisticsItem = ({props}) => {
    return(
    <li className={css.item}>
      <span className={css.label}>{props.label}</span>
      <span className={css.percentage}>{props.percentage}%</span>
        </li>
    )
}

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};