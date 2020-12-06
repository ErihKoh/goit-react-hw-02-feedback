import s from './Statistics.module.css';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span>good: </span>
        <span>{good}</span>
      </li>
      <li className={s.item}>
        <span>neutral: </span>
        <span>{neutral}</span>
      </li>
      <li className={s.item}>
        <span>bad: </span>
        <span>{bad}</span>
      </li>
      <li className={s.item}>
        <span>total: </span>
        <span>{total}</span>
      </li>
      <li className={s.item}>
        <span>positivePercentage: </span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

export default Statistic;
