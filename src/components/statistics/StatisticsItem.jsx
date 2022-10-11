import css from './Statistics.module.css'

export const StatisticsItem = (props) => {
    <li className={css.item}>
      <span className={css.label}>{props.label}</span>
      <span className={css.percentage}>{props.percentage}%</span>
    </li>;
}