import css from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({stats}) => {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statList}>
                {stats.map((stat) => {
                    return (
                        <StatisticsItem props={stat} key={stat.id} />
                    )
                })}
          
        </ul>
      </section>
    );
}