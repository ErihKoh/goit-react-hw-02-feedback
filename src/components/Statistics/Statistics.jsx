import s from './Statistics.module.css';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li>
        <span>good: </span>
        <span>{good}</span>
      </li>
      <li>
        <span>neutral: </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>bad: </span>
        <span>{bad}</span>
      </li>
      <li>
        <span>total: </span>
        <span>{total}</span>
      </li>
      <li>
        <span>positivePercentage: </span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

export default Statistic;
